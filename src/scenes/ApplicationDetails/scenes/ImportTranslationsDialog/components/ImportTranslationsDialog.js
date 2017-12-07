import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import Dialog from 'components/Dialog';
import LanguagePicker from 'scenes/LanguagePicker';
import { Form, Submit, Input, Label } from 'style/Forms';
import { DialogHeader } from 'style/Headings';
import { replaceLastPath } from 'util/url';

const FileInput = styled(Input).attrs({
  type: 'file',
})``;

class ImportTranslationsDialog extends React.Component {
  static propTypes = {
    url: string.isRequired,
  };

  constructor(props) {
    super(props);

    this.fileReader = new FileReader();
    this.fileReader.onload = this.onFileRead;

    this.fileContents = null;
  }

  state = {
    isFileValid: false,
    error: '',
    selectedLanguageId: '',
  };

  onLanguageChange = e => {
    this.setState({
      selectedLanguageId: e.target.value,
    });
  };

  onFileRead = e => {
    const valueString = e.target.result;
    this.fileContents = valueString;
    this.setState({ isFileValid: true });
  };

  onFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      this.fileReader.readAsText(file);
    }
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { url } = this.props;
    const { selectedLanguageId } = this.state;
    const isSubmitDisabled = !this.state.isFileValid || !selectedLanguageId;

    return (
      <Dialog returnUrl={replaceLastPath(url, '')}>
        <DialogHeader>Import translations</DialogHeader>
        <Form onSubmit={this.onSubmit}>
          <Label>File</Label>
          <FileInput onChange={this.onFileChange} />
          <Label>Language</Label>
          <LanguagePicker
            onChange={this.onLanguageChange}
            selectedLanguageIds={selectedLanguageId}
          />
          <Submit disabled={isSubmitDisabled}>Submit</Submit>
        </Form>
      </Dialog>
    );
  }
}

ImportTranslationsDialog.propTypes = {
  match: shape({
    url: string.isRequired,
  }).isRequired,
};

export default ImportTranslationsDialog;
