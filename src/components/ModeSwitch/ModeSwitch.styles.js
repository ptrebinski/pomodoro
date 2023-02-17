import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: max-content;
  margin: 0 auto 3rem;
  padding: 0.5rem;
  border-radius: 2rem;
  background-color: hsl(var(--clr-bg-2));

  /* prevent shadow overlap */
  position: relative;
  z-index: 10;
`;

export const Button = styled.button`
  height: 3rem;
  width: 6.5rem;
  border: none;
  font-size: var(--fs-100);
  color: hsl(var(--clr-gray-2) / 0.4);
  border-radius: 1.5rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ active }) => !active && 'hsl(var(--clr-gray-2))'};
  }

  ${({ active }) =>
    active &&
    css`
      color: hsl(var(--clr-bg-1));
      background-color: hsl(var(--clr-primary));
    `};

  @media (min-width: 750px) {
    width: 7.5rem;
    font-size: var(--fs-200);
  }
`;
