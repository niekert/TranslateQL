import React from 'react';
import styled from 'styled-components';
import TranslationValueInput from './TranslationValueInput';

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.div``;

function MutateTranslation({ translation, languages }) {
  return (
    <Wrapper>
      <Label>{translation.key}</Label>
      {languages.map(language => (
        <TranslationValueInput
          languageId={language.id}
          translation={translation}
        />
      ))}
    </Wrapper>
  );
}

export default MutateTranslation;
