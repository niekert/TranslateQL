import { node, number, shape } from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const DEFAULT_TIMEOUT_MS = {
  enter: 30000,
  exit: 30000,
};

const FadeTransition = styled(CSSTransition).attrs({
  classNames: {
    enter: 'enter',
    enterActive: 'enterActive',
  },
})`
  background: green;

  .enter {
    transition: opacity 5000ms ease-out;
    opacity: 0;
  }

  .enterActive {
    opacity: 1;
  }
`;

FadeTransition.propTypes = {
  timeout: shape({
    enter: number.isRequired,
    exit: number.isRequired,
  }),
  children: node,
};

FadeTransition.defaultProps = {
  timeout: DEFAULT_TIMEOUT_MS,
  children: null,
};

export default FadeTransition;
