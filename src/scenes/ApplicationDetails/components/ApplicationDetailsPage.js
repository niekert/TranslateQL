import React from 'react';
import { shape, string, bool } from 'prop-types';
import { H1 } from 'style/Headings';
import { Rows } from 'style/flex';
import { Link, Route } from 'react-router-dom';
import { CtaButton } from 'style/Buttons';
import Loading from 'components/Loading';
import { NormalPage } from 'style/Wrappers';
import { prop } from 'styled-tools';
import AddLanguagesDialog from '../scenes/AddLanguagesDialog';

const CtaLink = CtaButton.extend`
  margin-left: ${prop('theme.spacing.1')};
  font-size: 12px;
`.withComponent(Link);

const StyledRows = Rows.extend`
  align-items: center;
`;

function ApplicationDetailsPage({ match, name, baseLanguage, isLoading }) {
  console.log('params', match.params.applicationId);
  return (
    <NormalPage>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <StyledRows>
            <H1>{name}</H1>
            <CtaLink to={`${match.url}/languages`}>Add languages</CtaLink>
          </StyledRows>
          <span>Base language {baseLanguage.name}</span>
        </div>
      )}
      <Route path={`${match.path}/languages`} component={AddLanguagesDialog} />
    </NormalPage>
  );
}

ApplicationDetailsPage.propTypes = {
  match: shape({
    url: string.isRequired,
  }).isRequired,
  name: string,
  baseLanguage: shape({
    name: string.isRequired,
  }),
  isLoading: bool,
};

ApplicationDetailsPage.defaultProps = {
  name: '',
  baseLanguage: null,
  isLoading: true,
};

export default ApplicationDetailsPage;
