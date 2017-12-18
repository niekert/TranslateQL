import React from 'react';
import { Input } from 'style/Forms';

function ValueInput({ languageId, translation }) {
  const translationValue = translation.values.find(
    value => value.language.id === languageId,
  );

  return <Input value={translationValue ? translationValue.value : ''} />;
}

export default ValueInput;
