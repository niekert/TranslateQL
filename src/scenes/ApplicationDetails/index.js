import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, mapProps } from 'recompose';
import ApplicationDetailsPage from './components/ApplicationDetailsPage';

const APPLICATION_QUERY = gql`
  query ApplicationDetails($applicationId: ID!) {
    Application(id: $applicationId) {
      id
      name
      baseLanguage {
        id
        code
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
      const { id, name, baseLanguage } = data.Application || {};
      return {
        applicationId: id,
        isLoading: data.loading,
        name,
        baseLanguage,
        ...ownProps,
      };
    },
  }),
);

export default enhance(ApplicationDetailsPage);
