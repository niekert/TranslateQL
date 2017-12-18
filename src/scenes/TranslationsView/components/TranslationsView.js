import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import gql from 'graphql-tag';
import { propType } from 'graphql-anywhere';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { NormalTile } from 'style/Tiles';
import MutateTranslation from '../scenes/MutateTranslation';
import Filter from './Filter';

const Wrapper = styled.div`
  margin-top: 2em;
`;

const TranslationsGrid = styled.div`
  display: grid;
  grid-template: repeat(auto-fit, 25px) / repeat(${prop('columnLength')}, 1fr);
`;

const Label = styled.label`
  font-weight: 600;
`;

function TranslationsView({ setFilter, translations, languages }) {
  return (
    <Wrapper>
      <Filter setFilter={setFilter} />
      <NormalTile>
        <TranslationsGrid columnLength={languages.length + 1}>
          <Label>Key</Label>
          {languages.map(language => (
            <Label key={language.id}>{language.code}</Label>
          ))}
          {translations.map(translation => (
            <MutateTranslation
              languages={languages}
              translation={translation}
              key={translation.id}
            />
          ))}
          <MutateTranslation languages={languages} />
        </TranslationsGrid>
      </NormalTile>
    </Wrapper>
  );
}

TranslationsView.fragments = {
  translation: gql`
    fragment TranslationsViewTranslation on Translation {
      id
      key
      values {
        id
        language {
          id
        }
        value
      }
    }
  `,
};

TranslationsView.propTypes = {
  setFilter: func.isRequired,
  translations: arrayOf(propType(TranslationsView.fragments.translation))
    .isRequired,
  languages: arrayOf(
    shape({
      id: string.isRequired,
      code: String.isRequired,
    }).isRequired,
  ).isRequired,
};

TranslationsView.defaultProps = {
  translations: [],
};

export default TranslationsView;
