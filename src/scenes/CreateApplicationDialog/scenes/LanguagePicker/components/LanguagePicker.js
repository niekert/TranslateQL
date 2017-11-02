import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { Radio, RadioLabel } from 'style/Forms';

function LanguagePicker({ languages, onChange, selectedLanguageId }) {
  return (
    <div>
      {languages.map(language => (
        <RadioLabel key={`language-${language.id}`}>
          <Radio
            checked={selectedLanguageId === language.id}
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
  selectedLanguageId: string,
  onChange: func.isRequired,
};

LanguagePicker.defaultProps = {
  languages: [],
  selectedLanguageId: null,
};

export default LanguagePicker;
