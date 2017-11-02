import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { prop } from 'styled-tools';

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${prop('theme.background.tile')};
  box-shadow: ${prop('theme.shadows.2')};
  padding: ${prop('theme.spacing.0')} 0;
  min-width: 150px;
`;

export const DropdownOption = styled.button`
  background: none;
  border: none;
  color: ${prop('theme.color.primaryInactive')};
  font-weight: 300;
  display: block;
  text-decoration: none;
  text-align: left;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  padding: 15px;

  &:hover {
    color: ${prop('theme.color.primary')};
  }
`;

export const DropdownOptionLink = DropdownOption.withComponent(Link);
