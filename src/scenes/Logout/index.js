import React, { Component } from 'react';
import { func } from 'prop-types';
import { logout } from 'data/auth/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LogoutContainer extends Component {
  static propTypes = {
    logout: func.isRequired,
  };

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default connect(null, { logout })(LogoutContainer);
