import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { CtaButton } from 'style/Buttons';
import { NormalPage } from 'style/Wrappers';
import CreateApplicationDialog from 'scenes/CreateApplicationDialog';
import ApplicationTile from './ApplicationTile';

const NewPageLink = CtaButton.withComponent(Link);

const ApplicationWrapper = styled.div`
  margin-bottom: 20px;
`;

function ApplicationsPage({ match, applications }) {
  return (
    <NormalPage>
      <ApplicationWrapper>
        {applications.map(application => (
          <ApplicationTile
            key={application.id}
            id={application.id}
            name={application.name}
          />
        ))}
      </ApplicationWrapper>
      <NewPageLink to="new-app">Add new app</NewPageLink>
      <Route path="/new-app" component={CreateApplicationDialog} />
    </NormalPage>
  );
}

ApplicationsPage.propTypes = {
  match: shape({
    url: string.isRequired,
  }).isRequired,
  applications: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ApplicationsPage;
