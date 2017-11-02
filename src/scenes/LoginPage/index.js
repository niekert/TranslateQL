import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { saveUserLogin } from 'data/auth/actions';
import LoginPage from './components/LoginPage';

const CREATE_USER_MUTATION = gql`
  mutation createUserMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      username: $username
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;

const LOGIN_USER_MUTATUION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.data.auth.userId,
  };
}

const enhance = compose(
  connect(mapStateToProps, { saveUserLogin }),
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
  graphql(LOGIN_USER_MUTATUION, { name: 'loginUserMutation' }),
);

export default enhance(LoginPage);
