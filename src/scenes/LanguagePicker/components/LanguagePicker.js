import React from 'react';
import { arrayOf, shape, string, func, oneOfType, bool } from 'prop-types';
import { Radio, RadioLabel, Checkbox } from 'style/Forms';

function LanguagePicker({ languages, onChange, isSelectMultiple, selected }) {
  const selectedArray = Array.isArray(selected) ? selected : [selected];
  const InputComponent = isSelectMultiple ? Checkbox : Radio;

  return (
    <div>
      {languages.map(language => (
        <RadioLabel key={`language-${language.id}`}>
          <InputComponent
            checked={selectedArray.includes(language.id)}
            value={language.id}
            onChange={onChange}
          />
          {language.name}
        </RadioLabel>
      ))}
    </div>
  );
}

LanguagePicker.propTypes = {
  languages: arrayOf(
    shape({
      name: string.isRequired,
      code: string.isRequired,
      id: string.isRequired,
    }).isRequired,
  ),
  isSelectMultiple: bool,
  selected: oneOfType([string, arrayOf(string)]),
  onChange: func.isRequired,
};

LanguagePicker.defaultProps = {
  languages: [],
  selected: '',
  isSelectMultiple: false,
};

export default LanguagePicker;
