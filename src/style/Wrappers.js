import styled from 'styled-components';
import { prop } from 'styled-tools';
import { smallUp } from './breakpoints';

// eslint-disable-next-line import/prefer-default-export
export const NormalPage = styled.div`
  max-width: ${prop('theme.breakpoints.maxWidth')};
  padding: 0 ${prop('theme.spacing.1')};
  margin: 0 auto;

  ${smallUp`
    padding: 0 ${prop('theme.spacing.4')};
  `};
`;
