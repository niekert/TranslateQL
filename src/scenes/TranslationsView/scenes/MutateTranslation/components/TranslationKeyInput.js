import React from 'react';
import { Input } from 'style/Forms';

function TranslationKeyInput({ translationId, translationKey }) {
  return <Input value={translationKey} />;
}

export default TranslationKeyInput;
