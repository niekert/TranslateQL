import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import LanguagePicker from 'scenes/LanguagePicker';
import { matchProp } from 'customPropTypes';
import { DialogHeader } from 'style/Headings';
import { Form, Submit } from 'style/Forms';
import { replaceLastPath } from 'util/url';
import Dialog from 'components/Dialog';

class AddLanguagesDialog extends React.Component {
  static propTypes = {
    match: matchProp.isRequired,
    currentLanguageIds: arrayOf(string).isRequired,
    submit: func.isRequired,
  };

  state = {
    selectedLanguageIds: new Set(this.props.currentLanguageIds),
  };

  onLanguageChange = e => {
    const languageIds = this.state.selectedLanguageIds;
    if (e.target.checked) {
      languageIds.add(e.target.value);
    } else {
      languageIds.delete(e.target.value);
    }

    this.setState({
      selectedLanguageIds: languageIds,
    });
  };

  submitForm = e => {
    e.preventDefault();

    this.props.submit({
      selectedLanguageIds: Array.from(this.state.selectedLanguageIds),
    });
  };

  render() {
    const { match } = this.props;
    return (
      <Dialog returnUrl={replaceLastPath(match.url, '')}>
        <Form onSubmit={this.submitForm}>
          <DialogHeader>Change languages</DialogHeader>
          <LanguagePicker
            selectedLanguageIds={Array.from(this.state.selectedLanguageIds)}
            onChange={this.onLanguageChange}
          />
          <Submit>Save</Submit>
        </Form>
      </Dialog>
    );
  }
}

export default AddLanguagesDialog;
