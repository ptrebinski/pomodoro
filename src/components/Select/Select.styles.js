import styled, { css } from 'styled-components';
import arrowDownIcon from '../../assets/icons/icon-arrow-down.svg';

export const Wrapper = styled.div`
  width: 8rem;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-size: var(--fs-200);
  border-radius: 10px;
  color: hsl(var(--clr-bg-2));
  background-color: hsl(var(--clr-gray-1));

  &::after {
    content: url(${arrowDownIcon});
    margin-left: 0.5rem;
  }

  &:focus-visible {
    outline: 2px solid hsl(var(--clr-bg-2));
  }
`;

export const OptionsList = styled.ul`
  padding: 0.25rem;
  margin-top: 0.25rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  list-style: none;
  border-radius: 10px;
  background-color: hsl(var(--clr-gray-1));
  z-index: 100;
`;

export const Option = styled.li`
  padding: 0.25rem 1rem;
  border-radius: 5px;
  cursor: default;

  & + & {
    margin-top: 0.125rem;
  }

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background-color: hsl(var(--clr-primary) / 0.3);
    `};

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: hsl(var(--clr-primary));
      color: hsl(var(--clr-white));
    `};
`;
