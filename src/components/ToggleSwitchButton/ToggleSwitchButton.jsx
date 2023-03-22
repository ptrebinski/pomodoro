import styled from 'styled-components';

const Wrapper = styled.div`
  input {
    opacity: 0;
    position: absolute;
    left: -9000px;
    top: -9000px;
  }

  label {
    --color: var(--clr-bg-2);
    font-size: 1.25rem;
    width: 2.3em;
    height: 1.3em;
    padding: 0.15em;
    display: block;
    border-radius: 1em;
    background-color: hsl(var(--color) / 0.3);
    cursor: pointer;

    &::before {
      content: '';
      height: 1em;
      width: 1em;
      display: block;
      border-radius: 50%;
      background-color: hsl(var(--clr-white));
      transition: transform 150ms ease-in-out;
    }
  }
  input:checked + label {
    background-color: hsl(var(--color));

    &::before {
      transform: translateX(100%);
    }
  }
`;

function ToggleSwitchButton({ id, checked, onChange }) {
  return (
    <Wrapper>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}></label>
    </Wrapper>
  );
}

export default ToggleSwitchButton;
