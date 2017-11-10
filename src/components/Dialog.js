import React, { Component } from 'react';
import { string, node } from 'prop-types';
import { Portal } from 'react-portal';
import CloseIcon from 'components/icons/Close';
import enhanceClickOutside from 'react-click-outside';
import { alpha } from 'util/colors';
import styled, { keyframes } from 'styled-components';
import { prop } from 'styled-tools';
import history from 'util/history';

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
`;

const slideIn = keyframes`
  from {
    transform: translateY(15px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
`;

const CloseButton = styled.button`
  color: ${props => alpha(props.theme.color.primary, 0.7)};
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  background: none;
  border: none;

  &:hover {
    color: ${prop('theme.color.primary')};
  }
`;

const StyledDialog = styled.div`
  position: relative;
  background: #fff;
  border-radius: 3px;
  min-width: 400px;
  min-height: 400px;
  padding: ${prop('theme.spacing.2')};
  box-shadow: ${prop('theme.shadows.1')};
  animation: ${slideIn} 0.2s ease-out forwards;
`;

class Dialog extends Component {
  static propTypes = {
    returnUrl: string,
    children: node,
  };

  static defaultProps = {
    returnUrl: '/',
    children: null,
  };

  componentDidMount() {
    this.returnUrl = this.props.returnUrl;
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.key === 'Escape') {
      this.closeDialog();
    }
  };

  closeDialog = () => {
    history.replace(this.returnUrl);
  };

  handleClickOutside() {
    this.closeDialog();
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <Portal>
        <Overlay>
          <StyledDialog {...props}>
            <CloseButton onClick={this.closeDialog}>
              <CloseIcon />
            </CloseButton>
            {children}
          </StyledDialog>
        </Overlay>
      </Portal>
    );
  }
}

export default enhanceClickOutside(Dialog);
