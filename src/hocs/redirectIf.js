import React from 'react';
import { Redirect } from 'react-router-dom';
import { branch } from 'recompose';

const redirect = to => () => () => <Redirect to={to} />;

const redirectIf = (test, to) => ComposedComponent =>
  branch(test, redirect(to))(ComposedComponent);

export default redirectIf;
