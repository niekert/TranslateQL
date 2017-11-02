import styled from 'styled-components';
import { prop } from 'styled-tools';

export const NormalTile = styled.div`
  margin-bottom: 15px;
  box-shadow: ${prop('theme.shadows.1')};
  background: ${prop('theme.background.tile')};
  padding: ${prop('theme.spacing.2')};
`;
