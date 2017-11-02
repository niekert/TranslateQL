import React from 'react';
import { Dropdown, DropdownOption, DropdownOptionLink } from 'style/Dropdown';

function ProfileDropdown() {
  return (
    <Dropdown>
      <DropdownOptionLink to="/logout">Log out</DropdownOptionLink>
      <DropdownOption>Profile settings</DropdownOption>
    </Dropdown>
  );
}

export default ProfileDropdown;
