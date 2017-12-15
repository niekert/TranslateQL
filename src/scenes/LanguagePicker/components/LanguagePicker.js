import React from 'react';
import { arrayOf, shape, string, func, oneOfType, bool } from 'prop-types';
import { RadioLabel, Radio, Checkbox } from 'style/Forms';

function LanguagePicker({ languages, onChange, selectedLanguageIds, isRadio }) {
  const selectedIds = Array.isArray(selectedLanguageIds)
    ? new Set(selectedLanguageIds)
    : new Set([selectedLanguageIds]);

  const SelectComponent = isRadio ? Radio : Checkbox;

  return (
    <div>
      {languages.map(language => (
        <RadioLabel key={`language-${language.id}`}>
          <SelectComponent
            checked={selectedIds.has(language.id)}
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
  isRadio: bool,
  selectedLanguageIds: oneOfType([string, arrayOf(string)]),
  onChange: func.isRequired,
};

LanguagePicker.defaultProps = {
  languages: [],
  selectedLanguageIds: [],
  isRadio: false,
  isSelectMultiple: false,
};

export default LanguagePicker;
