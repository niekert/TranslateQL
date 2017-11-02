import React from 'react';
import { matchProp } from 'customPropTypes';
import { DialogHeader } from 'style/Headings';
import { replaceLastPath } from 'util/url';
import Dialog from 'components/Dialog';

function AddLanguagesDialog({ match }) {
  return (
    <Dialog returnUrl={replaceLastPath(match.url, '')}>
      <DialogHeader>Add languages</DialogHeader>
      ADding languages dialog
    </Dialog>
  );
}

AddLanguagesDialog.propTypes = {
  match: matchProp.isRequired,
};

export default AddLanguagesDialog;
