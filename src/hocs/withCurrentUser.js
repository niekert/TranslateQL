import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import gql from 'graphql-tag';

export const USER_QUERY = gql`
  query AuthUser {
    loggedInUser {
      id
      email
    }
  }
`;

const mapStateToProps = ({ data }) => ({
  token: data.auth.token,
});

const withUserTokenQuery = graphql(USER_QUERY, {
  options: { fetchPolicy: 'network' },
  props({ data }) {
    const { email, id: userId } = data.loggedInUser || {};
    return {
      refetchUser: data.refetch,
      email,
      userId,
      userLoading: data.loading,
    };
  },
});

export default compose(
  withUserTokenQuery,
  connect(mapStateToProps),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.token !== this.props.token) {
        this.props.refetchUser();
      }
    },
  }),
);
