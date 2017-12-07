import { graphql } from 'react-apollo';
import { compose, mapProps } from 'recompose';
import gql from 'graphql-tag';
import ImportTranslationsDialog from './components/ImportTranslationsDialog';

const ADD_TRANSLATION = gql`
  mutation addTranslation(
    $key: String!
    $applicationId: ID!
    $languageId: ID!
    $value: String!
  ) {
    createTranslation(
      applicationId: $applicationId
      key: $key
      values: [{ languageId: $languageId, value: $value }]
    ) {
      id
    }
  }
`;

const enhance = compose(
  mapProps(({ match }) => ({
    applicationId: match.params.applicationId,
    url: match.url,
  })),
  graphql(ADD_TRANSLATION, {
    props({ ownProps, mutate }) {
      return {
        importFile({ fileContents, selectedLanguageId }) {
          return mutate({
            variables: {
              applicationId: ownProps.applicationId,
              fileContents,
              selectedLanguageId,
            },
          });
        },
      };
    },
  }),
);

export default enhance(ImportTranslationsDialog);
