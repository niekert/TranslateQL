import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { DialogHeader } from 'style/Headings';
import styled from 'styled-components';
import history from 'util/history';
import { prop } from 'styled-tools';
import { Form, Input, Label, Submit, ErrorLabel } from 'style/Forms';
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
    selectedBaseLanguageId: '',
  };

  onNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onLanguageChange = e => {
    this.setState({
      selectedBaseLanguageId: e.target.value,
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { name, selectedBaseLanguageId } = this.state;

    this.setState({ error: null });

    try {
      await this.props.submit({
        name,
        baseLanguageId: selectedBaseLanguageId,
      });

      history.replace('/');
    } catch (error) {
      console.log('something went wrong', error);
      this.setState({ error });
    }
  };

  render() {
    const { name, selectedBaseLanguageId } = this.state;
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
            selected={selectedBaseLanguageId}
            onChange={this.onLanguageChange}
          />

          <StyledSubmit>Add application</StyledSubmit>
        </Form>
      </Dialog>
    );
  }
}

export default CreateApplicationDialog;
