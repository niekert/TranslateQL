import { get } from 'lodash';
import { connect } from 'react-redux';
import { mapProps, branch } from 'recompose';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Topbar from './components';

const USER_QUERY = gql`
  query AuthUser {
    user {
      id
      username
    }
  }
`;

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.data.auth.userId,
  };
}

const enhance = compose(
  connect(mapStateToProps),
  branch(
    ({ isLoggedIn }) => isLoggedIn,
    graphql(USER_QUERY, { options: { fetchPolicy: 'network' } }),
  ),
  mapProps(({ data, ...props }) => ({
    username: get(data, 'user.username'),
    ...props,
  })),
);

export default enhance(Topbar);
