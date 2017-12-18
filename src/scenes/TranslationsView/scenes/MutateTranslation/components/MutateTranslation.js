import React from 'react';
import styled from 'styled-components';
import TranslationKeyInput from './TranslationKeyInput';
import TranslationValueInput from './TranslationValueInput';

const Wrapper = styled.div`
  display: flex;
`;

function MutateTranslation({ translation, languages }) {
  return (
    <React.Fragment>
      <TranslationKeyInput
        translationKey={translation.key}
        translationId={translation.id}
      />
      {languages.map(language => (
        <TranslationValueInput
          languageId={language.id}
          translation={translation}
        />
      ))}
    </React.Fragment>
  );
}

export default MutateTranslation;
