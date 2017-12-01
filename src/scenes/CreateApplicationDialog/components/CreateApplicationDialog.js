import React, { Component } from 'react';
import { func } from 'prop-types';
import { DialogHeader } from 'style/Headings';
import styled from 'styled-components';
import history from 'util/history';
import { prop } from 'styled-tools';
import { Form, Input, Label, Submit } from 'style/Forms';
import Dialog from 'components/Dialog';
import LanguagePicker from 'scenes/LanguagePicker';

const StyledSubmit = styled(Submit)`
  margin-top: ${prop('theme.spacing.1')};
`;

class CreateApplicationDialog extends Component {
  static propTypes = {
    submit: func.isRequired,
  };

  state = {
    name: '',
    error: '',
    selectedLanguageIds: new Set(),
  };

  onNameChange = e => {
    this.setState({ name: e.target.value });
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

  onSubmit = async e => {
    e.preventDefault();
    const { name, selectedLanguageIds } = this.state;

    this.setState({ error: null });

    try {
      await this.props.submit({
        name,
        selectedLanguageIds: Array.from(selectedLanguageIds),
      });

      history.replace('/');
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { name, selectedLanguageIds } = this.state;
    return (
      <Dialog returnUrl="/">
        <DialogHeader>Create an app</DialogHeader>
        <Form onSubmit={this.onSubmit}>
          <Label htmlFor="appName">App name</Label>
          <Input
            type="text"
            required
            id="appName"
            value={name}
            onChange={this.onNameChange}
          />
          <Label>Base language</Label>
          <LanguagePicker
            selectedLanguageIds={Array.from(selectedLanguageIds)}
            onChange={this.onLanguageChange}
          />

          <StyledSubmit>Add application</StyledSubmit>
        </Form>
      </Dialog>
    );
  }
}

export default CreateApplicationDialog;
