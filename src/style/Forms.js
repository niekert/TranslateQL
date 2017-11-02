import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Button } from './Buttons';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const Input = styled.input`
  height: 32px;
  font-size: 14px;
  border-radius: 3px;
  color: ${prop('theme.color.primary')};
  padding: ${prop('theme.spacing.0')};
  margin-bottom: ${prop('theme.spacing.1')};
  webkit-style: none;
  border: 1px solid ${prop('theme.color.outline')};
`;

export const TextArea = Input.withComponent('textarea').extend`
  display: block;
  min-width: 250px;
  min-height: 100px;
`;

export const Label = styled.label`
  margin-bottom: ${prop('theme.spacing.0')};
  display: block;
  font-size: 20px;
`;

export const ErrorLabel = Label.withComponent('span').extend`
  color: ${prop('theme.color.error')};
`;

export const Submit = Button.extend`
  color: ${prop('theme.background.cta')};
  font-size: ${prop('theme.fs.button')};
  border-radius: 30px;
  min-width: 100px;
  align-self: flex-start;
  outline: none;
  transition: color 0.075s ease-out, background 0.075s ease-out,
    transform 0.1s ease-out;

  &:hover,
  &:focus {
    color: #fff;
    background: ${prop('theme.background.cta')};
    border: 1px solid ${prop('theme.background.cta')};
    box-shadow: ${prop('theme.shadows.2')};
    transform: scale(1.1);
  }
`;
