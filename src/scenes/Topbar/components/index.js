import React, { Component } from 'react';
import { bool, string, func } from 'prop-types';
import styled from 'styled-components';
import StyledLink from 'components/Link';
import Popover from 'components/Popover';
import Headroom from 'react-headroom';
import NavLink from 'components/NavLink';
import { prop, ifProp } from 'styled-tools';
import { smallUp } from 'style/breakpoints';
import { alpha } from 'util/colors';
import { Rows } from 'style/flex';
import ProfileDropdown from './ProfileDropdown';

const Wrapper = styled.div`
  max-width: ${prop('theme.breakpoints.maxWidth')};
  padding: ${prop('theme.spacing.1')} ${prop('theme.spacing.1')};
  margin: 0 auto;

  ${smallUp`
    padding: ${prop('theme.spacing.2')} ${prop('theme.spacing.4')};
  `};
`;

const TopbarRow = styled(Rows)`
  justify-content: space-between;
`;

const NavigationRow = styled(Rows)`
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled(StyledLink)`
  font-size: 40px;
  font-weight: 600;
`;

const StyledHeadroom = styled(Headroom)`
  height: 200px;

  & .headroom {
    transition: background 0.1s ease-out, box-shadow 0.1s ease-out;
    background: ${ifProp('isPinned', 'rgba(255, 255, 255, .9)', 'none')};
    box-shadow: ${ifProp('isPinned', prop('theme.shadows.0'), 'none')};
  }
`;

const NavigationItem = styled(NavLink)`
  padding: 15px;
  color: ${props => alpha(props.theme.color.primary, 0.35)};
  display: flex;
  font-weight: 600;
  font-size: ${prop('theme.fs.navLink')};
  transition: color 0.05s ease-out;

  &:hover {
    color: ${prop('theme.color.primary')};
  }

  .konjo {
    border: 1px solid black;
  }
`;

class Topbar extends Component {
  static propTypes = {
    isLoggedIn: bool.isRequired,
    username: string,
    loading: bool,
    logout: func.isRequired,
  };

  static defaultProps = { username: '', loading: false };

  state = {
    isPinned: false,
    isFixed: false,
  };

  componentWillReceiveProps(nextProps) {
    // When the query has failed, we logout in redux store
    if (this.props.loading && !nextProps.loading && !nextProps.username) {
      this.props.logout();
    }
  }

  onPin = () => {
    this.setState({ isPinned: true });
  };

  onUnfix = () => {
    this.setState({ isPinned: false });
  };

  render() {
    const { isLoggedIn, username } = this.props;

    return (
      <StyledHeadroom
        onPin={this.onPin}
        onUnfix={this.onUnfix}
        isPinned={this.state.isPinned}
      >
        <Wrapper>
          <TopbarRow>
            <Logo to="/">
              <span role="img" aria-label="clown">
                🤡
              </span>
            </Logo>
            <NavigationRow>
              {!isLoggedIn ? (
                <NavigationItem to="/login">Sign in</NavigationItem>
              ) : (
                <Popover
                  triggerOnHover
                  triggerButton={
                    <NavigationItem to="/me">{username}</NavigationItem>
                  }
                >
                  <ProfileDropdown />
                </Popover>
              )}
            </NavigationRow>
          </TopbarRow>
        </Wrapper>
      </StyledHeadroom>
    );
  }
}

export default Topbar;
