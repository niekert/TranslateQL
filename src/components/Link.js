import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { prop } from 'styled-tools';

export default styled(Link)`
  text-decoration: none;
  color: ${prop('theme.color.primary')};
`;
