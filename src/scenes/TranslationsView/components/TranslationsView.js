import React from 'react';
import { arrayOf, bool, shape, string, func } from 'prop-types';
import gql from 'graphql-tag';
import { propType } from 'graphql-anywhere';
import styled from 'styled-components';
import { NormalTile } from 'style/Tiles';
import MutateTranslation from '../scenes/MutateTranslation';
import Filter from './Filter';

const Wrapper = styled.div`
  margin-top: 2em;
`;

function TranslationsView({ setFilter, translations, isLoading, languages }) {
  return (
    <Wrapper>
      <Filter setFilter={setFilter} />
      <NormalTile>
        Wow translations
        {translations.map(translation => (
          <MutateTranslation
            languages={languages}
            translation={translation}
            key={translation.id}
          />
        ))}
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
  isLoading: bool.isRequired,
};

TranslationsView.defaultProps = {
  translations: [],
};

export default TranslationsView;
