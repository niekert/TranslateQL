import React, { Component } from 'react';
import { func, shape, bool } from 'prop-types';
import { prop } from 'styled-tools';
import { H2 } from 'style/Headings';
import { NormalTile } from 'style/Tiles';
import { LinkButton } from 'style/Buttons';
import { Form, Input, Label, Submit, ErrorLabel } from 'style/Forms';
import { NormalPage } from 'style/Wrappers';

// Map error codes from Graphcool to labels
const ERROR_LABEL_MAP = new Map([
  [3022, 'Invalid email or password'],
  [3023, 'A user with that email already exists'],
]);

export const SwitchButton = LinkButton.extend`
  align-self: flex-start;
`;

export const StyledErrorLabel = ErrorLabel.extend`
  display: inline-block;
  margin-left: ${prop('theme.spacing.1')};
  font-size: 14px;
`;

class LoginPage extends Component {
  static propTypes = {
    history: shape({
      push: func.isRequired,
    }).isRequired,
    createUserMutation: func.isRequired,
    loginUserMutation: func.isRequired,
    saveUserLogin: func.isRequired,
    isLoggedIn: bool.isRequired,
  };

  state = {
    isSignup: false,
    isLoading: false,
    error: '',
    password: '',
    email: '',
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      this.props.history.push('./');
    }
  }

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  switchSignupLogin = () => {
    this.setState({
      isSignup: !this.state.isSignup,
    });
  };

  submit = async e => {
    e.preventDefault();
    const { isSignup, password, email } = this.state;

    this.setState({ isLoading: true, error: null });
    try {
      const result = isSignup
        ? await this.props.createUserMutation({
            variables: {
              password,
              email,
            },
          })
        : await this.props.loginUserMutation({
            variables: {
              email,
              password,
            },
          });

      const { token } =
        result.data.signinUser || result.data.authenticateUser || {};

      this.props.saveUserLogin({ token });
    } catch ({ graphQLErrors }) {
      const [error] = graphQLErrors;
      this.setState({
        error: ERROR_LABEL_MAP.get(error.code),
        isLoading: false,
      });
    }
  };

  render() {
    const { isSignup, password, email, error, isLoading } = this.state;

    return (
      <NormalPage>
        <H2>{isSignup ? 'Sign up' : 'Login'}</H2>
        <NormalTile>
          <Form onSubmit={this.submit}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.onInputChange}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.onInputChange}
              required
            />
            <SwitchButton tabIndex={-1} onClick={this.switchSignupLogin}>
              {isSignup ? 'Want to log in?' : 'Create an account?'}
            </SwitchButton>
            <div>
              <Submit>{isSignup ? 'Sign up' : 'Login'}</Submit>
              {error && <StyledErrorLabel>{error}</StyledErrorLabel>}
            </div>
            {isLoading && <span>Loading...</span>}
          </Form>
        </NormalTile>
      </NormalPage>
    );
  }
}

export default LoginPage;
