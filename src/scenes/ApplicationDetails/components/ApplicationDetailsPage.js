import React from 'react';
import { arrayOf, shape, string, bool } from 'prop-types';
import { H1 } from 'style/Headings';
import { Rows } from 'style/flex';
import { Link, Route } from 'react-router-dom';
import { CtaButton } from 'style/Buttons';
import TranslationsView from 'scenes/TranslationsView';
import Loading from 'components/Loading';
import { NormalPage } from 'style/Wrappers';
import ChangeLanguagesDialog from '../scenes/ChangeLanguagesDialog';
import ImportTranslationsDialog from '../scenes/ImportTranslationsDialog';

const CtaLink = CtaButton.extend`
  font-size: 12px;
  display: inline-block;
`.withComponent(Link);

const StyledRows = Rows.extend`
  align-items: center;
`;

function ApplicationDetailsPage({ match, name, languages, isLoading }) {
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
          <span>{languages.map(language => language.name).join(', ')}</span>
          <TranslationsView />
          <CtaLink to={`${match.url}/import`}>Import...</CtaLink>
        </div>
      )}
      <Route
        path={`${match.path}/languages`}
        component={ChangeLanguagesDialog}
      />
      <Route
        path={`${match.path}/import`}
        component={ImportTranslationsDialog}
      />
    </NormalPage>
  );
}

ApplicationDetailsPage.propTypes = {
  match: shape({
    url: string.isRequired,
  }).isRequired,
  languages: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
    }),
  ).isRequired,
  name: string,
  isLoading: bool,
};

ApplicationDetailsPage.defaultProps = {
  name: '',
  isLoading: true,
};

export default ApplicationDetailsPage;
