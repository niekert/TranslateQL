import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { RadioLabel, Checkbox } from 'style/Forms';

function LanguagePicker({ languages, onChange, selectedLanguageIds }) {
  return (
    <div>
      {languages.map(language => (
        <RadioLabel key={`language-${language.id}`}>
          <Checkbox
            checked={selectedLanguageIds.includes(language.id)}
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
  selectedLanguageIds: arrayOf(string),
  onChange: func.isRequired,
};

LanguagePicker.defaultProps = {
  languages: [],
  selectedLanguageIds: [],
  isSelectMultiple: false,
};

export default LanguagePicker;
