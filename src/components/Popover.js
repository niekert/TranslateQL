/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { cloneElement } from 'react';
import { bool, node, func, oneOfType } from 'prop-types';
import styled from 'styled-components';
import enhanceClickOutside from 'react-click-outside';

const Wrapper = styled.div`
  position: relative;
`;

class Popover extends React.Component {
  static propTypes = {
    isOpen: bool,
    triggerOnHover: bool,
    triggerButton: oneOfType([node, func]).isRequired,
    children: node,
    closeOnClick: bool,
    onToggle: func,
  };

  static defaultProps = {
    isOpen: false,
    closeOnClick: true,
    triggerOnHover: false,
    children: null,
    onToggle: null,
  };

  state = {
    isOpen: this.props.isOpen,
  };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.isOpen !== this.props.isOpen &&
      nextProps.isOpen !== this.state.isOpen
    ) {
      this.setSate({ isOpen: nextProps.isOpen }); // TODO: fix this :)
    }
  };

  onChildClicked = () => {
    if (this.props.closeOnClick) {
      this.setState({ isOpen: false });
    }
  };

  onTriggerButtonClick = e => {
    if (!this.props.triggerOnHover) {
      this.togglePopover();
      e.preventDefault();
    }
  };

  togglePopover = (isOpen = !this.state.isOpen) => {
    this.setState({ isOpen });

    if (typeof this.props.onToggle === 'function') {
      this.props.onToggle(isOpen);
    }
  };

  // Function called by `enhanceClickOutside` hoc
  handleClickOutside() {
    // eslint-disable-line
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { children, triggerButton, ...props } = this.props;

    return (
      <Wrapper
        innerRef={c => (this._element = c)} // eslint-disable-line
        onMouseOver={() =>
          this.props.triggerOnHover && this.togglePopover(true)}
        onMouseLeave={() =>
          this.props.triggerOnHover && this.togglePopover(false)}
        {...props}
      >
        {cloneElement(triggerButton, {
          onClick: this.onTriggerButtonClick,
          isOpen: this.state.isOpen,
        })}
        <div onClick={this.onChildClicked}>{this.state.isOpen && children}</div>
      </Wrapper>
    );
  }
}

export default enhanceClickOutside(Popover);
