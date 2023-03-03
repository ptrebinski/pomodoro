import styled, { css } from 'styled-components';

const rangeThumbStyles = css`
  -webkit-appearance: none;
  appearance: none;
  height: 1.25rem;
  width: 1.25rem;
  border: none;
  border-radius: 50%;
  background: hsl(var(--clr-primary));
  box-shadow: 0 0 2px 0 hsl(var(--clr-bg-1) / 0.5);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: hsl(var(--clr-bg-1));

  label {
    font-size: var(--fs-100);
    opacity: 0.5;
  }

  input:not([type='range']) {
    width: 100%;
    max-width: 8.75rem;
    padding: 0.75rem 1rem;
    border: none;
    font-size: var(--fs-200);
    border-radius: 10px;
    background-color: hsl(var(--clr-gray-1));

    &:focus {
      outline: 2px solid hsl(var(--clr-bg-1));
      outline-offset: 2px;
    }
  }

  input[type='number']::-webkit-inner-spin-button {
    opacity: 1;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    max-width: 8rem;
    height: 0.5rem;
    background-color: hsl(var(--clr-gray-1));
    border-radius: 5px;

    &::-webkit-slider-thumb {
      ${rangeThumbStyles}
    }

    &::-moz-range-thumb {
      ${rangeThumbStyles}
    }

    &:focus {
      outline: none;
      &::-webkit-slider-thumb {
        outline: 2px solid hsl(var(--clr-bg-2));
      }

      &::-moz-range-thumb {
        outline: 2px solid hsl(var(--clr-bg-2));
      }
    }
  }
`;

function Input({ id, label, ...props }) {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </Wrapper>
  );
}

export default Input;
