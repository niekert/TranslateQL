import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import AddLanguagesDialog from './components/AddLanguagesDialog';

const SECONDARY_LANGUAGES_QUERY = gql`
  query SecondaryLanguagesQuery($applicationId: ID!) {
    Application(id: $applicationId) {
      languages {
        id
        name
      }
    }
  }
`;

const enhance = compose(
  graphql(SECONDARY_LANGUAGES_QUERY, {
    options: ({ match }) => ({
      variables: { applicationId: match.params.applicationId },
    }),
    props({ ownProps, data }) {
      return {
        ...ownProps,
        data,
      };
    },
  }),
);

export default enhance(AddLanguagesDialog);
