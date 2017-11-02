import styled from 'styled-components';
import { alpha } from 'util/colors';
import { prop } from 'styled-tools';

export const Button = styled.button`
  background: none;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${prop('theme.colors.outline')};
  box-shadow: ${prop('theme.shadows.0')};
`;

export const CtaButton = Button.extend`
  background: ${prop('theme.background.cta')};
  text-decoration: none;
  color: #fff;
`;

export const LinkButton = styled.button.attrs({
  type: 'button',
})`
  display: inline-block;
  padding: 3px;
  margin-bottom: ${prop('theme.spacing.1')};
  font-size: ${prop('theme.fs.button')};
  color: ${props => alpha(props.theme.color.primary, 0.8)};
  cursor: pointer;
  outline: none;
  border: 0;
  background: none;

  &:hover,
  &:focus {
    color: ${prop('theme.color.primary')};
  }
`;
