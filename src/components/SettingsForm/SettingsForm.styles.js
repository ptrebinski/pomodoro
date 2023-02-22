import styled from 'styled-components';

export const Wrapper = styled.form`
  padding-bottom: 1.75rem;
  position: relative;
`;

export const TimeSection = styled.section`
  padding: 1.5rem;

  h3 {
    margin-bottom: 1.5em;
    font-size: var(--fs-100);
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
    color: hsl(var(--clr-bg-2));
  }

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    @media (max-width: 400px) {
      flex-direction: column;
    }
  }

  @media (min-width: 550px) {
    padding: 1.5rem 2.5rem;

    h3 {
      margin-bottom: 2em;
      text-align: left;
    }
  }
`;

export const Button = styled.button`
  padding: 1em 2.5em;
  border: none;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  font-size: 1rem;
  border-radius: 2em;
  background-color: hsl(var(--clr-primary));
  color: hsl(var(--clr-white));
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(hsl(var(--clr-white) / 0.2), hsl(var(--clr-white) / 0.2));
  }
`;
