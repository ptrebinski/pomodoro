import styled from 'styled-components';

export const Overlay = styled.div`
  padding: 2rem 0 3rem;
  width: 100%;
  max-height: 100vh;
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: hsla(234, 47%, 8%, 0.5);
  z-index: 100;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  width: min(540px, 100% - 3rem);
  border-radius: 1rem;
  background-color: hsl(var(--clr-white));
  z-index: 200;
`;

export const Header = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid #e3e1e1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: var(--fs-400);
    color: hsl(var(--clr-bg-2));
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;

    &:is(:hover, :focus) svg path {
      opacity: 1;
    }

    &:focus {
      outline: 2px solid hsl(var(--clr-bg-2));
    }
  }

  @media (min-width: 550px) {
    padding: 2.125rem 2.5rem;
  }
`;
