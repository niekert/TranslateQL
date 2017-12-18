import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const USER_QUERY = gql`
  query AuthUser {
    loggedInUser {
      id
      email
    }
  }
`;

export default graphql(USER_QUERY, {
  options: { fetchPolicy: 'network' },
  props({ data }) {
    const { email, id: userId } = data.loggedInUser || {};
    return {
      email,
      userId,
      userLoading: data.loading,
    };
  },
});
