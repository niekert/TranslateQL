import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  color: green;
  text-decoration: none;

  &.active {
    color: ${prop('theme.color.primary')};
  }
`;

export default StyledNavLink;
