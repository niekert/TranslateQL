import React from 'react';
import TranslationKeyInput from './TranslationKeyInput';
import TranslationValueInput from './TranslationValueInput';

function MutateTranslation({ translation, languages }) {
  return (
    <React.Fragment>
      <TranslationKeyInput
        translationKey={translation && translation.key}
        translationId={translation && translation.id}
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
