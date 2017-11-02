import gql from 'graphql-tag';

export default gql`
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
