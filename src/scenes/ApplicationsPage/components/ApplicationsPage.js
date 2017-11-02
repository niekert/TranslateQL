import React from 'react';
import { shape, string } from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { CtaButton } from 'style/Buttons';
import { NormalPage } from 'style/Wrappers';
import CreateApplicationDialog from 'scenes/CreateApplicationDialog';

const NewPageLink = CtaButton.withComponent(Link);

function ApplicationsPage({ match }) {
  return (
    <NormalPage>
      Wow here are the applications
      <NewPageLink to="new-app">Add new app</NewPageLink>
      <Route path="/new-app" component={CreateApplicationDialog} />
    </NormalPage>
  );
}

ApplicationsPage.propTypes = {
  match: shape({
    url: string.isRequired,
  }).isRequired,
};

export default ApplicationsPage;
