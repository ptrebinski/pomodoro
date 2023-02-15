import styled from 'styled-components';

export const Wrapper = styled.div`
  --size: 300px;
  width: var(--size);
  height: var(--size);
  margin: 0 auto;
  padding: 1rem;
  border-radius: calc(var(--size) / 2);
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;

  & > div {
    width: 100%;
    height: 100%;
    padding: 0.6rem;
    border-radius: 50%;
    background-color: hsl(var(--clr-bg-2));
  }

  .CircularProgressbar-path {
    stroke: hsl(var(--clr-primary));
  }

  @media (min-width: 750px) {
    --size: 410px;
    padding: 1.375rem;

    & > div {
      padding: 0.85rem;
    }
  }
`;

export const TimeDisplay = styled.p`
  margin-bottom: 0.5rem;
  font-size: var(--fs-600);
  letter-spacing: -4px;
`;

export const StyledButton = styled.button`
  padding: 0;
  border: none;
  font-size: var(--fs-200);
  letter-spacing: 0.8em;
  text-transform: uppercase;
  color: inherit;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    outline: none;
    color: hsl(var(--clr-primary));
  }

  @media (min-width: 750px) {
    font-size: 1rem;
  }
`;
