import { get } from 'lodash';
import { connect } from 'react-redux';
import { logout } from 'data/auth/actions';
import { mapProps, branch } from 'recompose';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Topbar from './components';

const USER_QUERY = gql`
  query AuthUser {
    loggedInUser {
      id
      email
    }
  }
`;

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.data.auth.token,
  };
}

const fetchUser = graphql(USER_QUERY, {
  options: { fetchPolicy: 'network' },
  props({ ownProps, data }) {
    return {
      username: data.loggedInUser && data.loggedInUser.email,
      loading: data.loading,
      ...ownProps,
    };
  },
});

const enhance = compose(
  connect(mapStateToProps, { logout }),
  branch(({ isLoggedIn }) => isLoggedIn, fetchUser),
  mapProps(({ data, ...props }) => ({
    username: get(data, 'user.email'),
    ...props,
  })),
);

export default enhance(Topbar);
