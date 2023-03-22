import styled from 'styled-components';

export const Wrapper = styled.form`
  padding: 0 1.5rem 1.75rem;
  position: relative;

  @media (min-width: 550px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const Section = styled.section`
  padding: 1.5rem 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid hsl(var(--clr-bg-2) / 0.1);
  }

  h3 {
    margin-bottom: 1.5em;
    font-size: var(--fs-100);
    text-transform: uppercase;
    letter-spacing: 4px;
    color: hsl(var(--clr-bg-2));
  }
`;

export const TimeSection = styled(Section)`
  h3 {
    text-align: center;
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
    h3 {
      margin-bottom: 2em;
      text-align: left;
    }
  }
`;

export const TransitionsSection = styled(Section)`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    label {
      flex: 1 0 70%;
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: 1;
    }

    span {
      font-size: var(--fs-100);
      text-transform: uppercase;
      letter-spacing: 2px;
      color: hsl(var(--clr-bg-1));
    }
  }
`;

export const SoundSection = styled(Section)`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }

  @media (max-width: 26rem) {
    flex-direction: column;
    align-items: center;

    & > div {
      align-items: center;
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
