import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import ApplicationDetailsPage from './components/ApplicationDetailsPage';

export const APPLICATION_QUERY = gql`
  query ApplicationDetails($applicationId: ID!) {
    Application(id: $applicationId) {
      id
      name
      languages {
        id
        name
      }
    }
  }
`;

const enhance = compose(
  graphql(APPLICATION_QUERY, {
    options: ({ match }) => ({
      variables: { applicationId: match.params.applicationId },
    }),
    props({ ownProps, data }) {
      const { id, name, languages = [] } = data.Application || {};
      return {
        applicationId: id,
        isLoading: data.loading,
        name,
        languages,
        ...ownProps,
      };
    },
  }),
);

export default enhance(ApplicationDetailsPage);
