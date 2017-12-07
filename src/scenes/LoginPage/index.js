import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { saveUserLogin } from 'data/auth/actions';
import LoginPage from './components/LoginPage';

const CREATE_USER_MUTATION = gql`
  mutation createUserMutation($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

const LOGIN_USER_MUTATUION = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`;

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.data.auth.token,
  };
}

const enhance = compose(
  connect(mapStateToProps, { saveUserLogin }),
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
  graphql(LOGIN_USER_MUTATUION, { name: 'loginUserMutation' }),
);

export default enhance(LoginPage);
