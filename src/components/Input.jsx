import styled from 'styled-components';

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

  input {
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
