import { graphql, compose } from 'react-apollo';
import { get } from 'lodash';
import gql from 'graphql-tag';
import { APPLICATION_QUERY } from '../../index';
import ChangeLanguagesDialog from './components/ChangeLanguagesDialog';

const SELECTED_LANGUAGES_QUERY = gql`
  query SelectedLanguagesQuery($applicationId: ID!) {
    Application(id: $applicationId) {
      languages {
        id
      }
    }
  }
`;

const UPDATE_APPLICATION_LANGUAGES = gql`
  mutation UpdateApplicationLanguages(
    $applicationId: ID!
    $selectedLanguageIds: [ID!]!
  ) {
    updateApplication(id: $applicationId, languagesIds: $selectedLanguageIds) {
      id
    }
  }
`;

const enhance = compose(
  graphql(SELECTED_LANGUAGES_QUERY, {
    options: ({ match }) => ({
      variables: { applicationId: match.params.applicationId },
    }),
    props({ ownProps, data }) {
      const languages = get(data, 'Application.languages', []);
      return {
        ...ownProps,
        applicationId: ownProps.match.params.applicationId,
        currentLanguageIds: languages.map(language => language.id),
      };
    },
  }),
  graphql(UPDATE_APPLICATION_LANGUAGES, {
    props({ ownProps, mutate }) {
      const { applicationId } = ownProps;
      return {
        submit({ selectedLanguageIds }) {
          return mutate({
            variables: {
              applicationId,
              selectedLanguageIds,
            },
            refetchQueries: [
              { query: APPLICATION_QUERY, variables: { applicationId } },
            ],
          });
        },
      };
    },
  }),
);

export default enhance(ChangeLanguagesDialog);
