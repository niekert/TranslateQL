import React from 'react';
import { mapProps } from 'recompose';
import { Input } from 'style/Forms';

const propsMapper = ({ languageId, translation }) => {
  const translationValue =
    translation &&
    translation.values.find(value => value.language.id === languageId);

  return {
    translationValueId: translationValue && translationValue.id,
    value: translationValue && translationValue.value,
  };
};

function ValueInput({ value, translationValueId }) {
  return <Input value={value} />;
}

export default mapProps(propsMapper)(ValueInput);
