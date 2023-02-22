import styled from 'styled-components';
import { ReactComponent as SettingsIcon } from '../assets/icon-settings.svg';

export const Wrapper = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  &:is(:hover, :focus) svg path {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid hsl(var(--clr-bg-2));
  }
`;

function SettingsButton(props) {
  return (
    <Wrapper {...props}>
      <SettingsIcon />
    </Wrapper>
  );
}

export default SettingsButton;
