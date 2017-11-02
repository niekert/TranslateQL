import styled from 'styled-components';
import { prop } from 'styled-tools';

export const H1 = styled.h1``;

export const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: ${prop('theme.spacing.1')};
`;

export const H3 = styled.h3``;

export const DialogHeader = styled.h1`
  font-weight: 600;
  font-size: 22px;
  padding-bottom: ${prop('theme.spacing.0')};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
