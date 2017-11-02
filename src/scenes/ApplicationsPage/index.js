import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, mapProps } from 'recompose';
import ApplicationsPage from './components/ApplicationsPage';

const USER_APPLICATIONS_QUERY = gql`
  query UserApplicationsQuery {
    user {
      id
      applications {
        id
        name
      }
    }
  }
`;

const enhance = compose(
  graphql(USER_APPLICATIONS_QUERY),
  mapProps(({ data }) => ({
    applications: data.user ? data.user.applications : [],
  })),
);

export default enhance(ApplicationsPage);
