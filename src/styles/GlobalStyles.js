import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  :root {
    /* colors */
    --clr-primary: 0 91% 71%;
    --clr-bg-1: 235 35% 18%;
    --clr-bg-2: 234 39% 14%;
    --clr-gray-1: 229 52% 96%;
    --clr-gray-2: 227 100% 92%;
    --clr-white: 0 0% 100%;

    /* font sizes */
    --fs-100: 0.75rem;
    --fs-200: 0.875rem;
    --fs-300: 1rem;
    --fs-400: 1.25rem;
    --fs-500: 1.5rem;
    --fs-600: 5rem;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    background-color: hsl(var(--clr-bg-1));
    color: hsl(var(--clr-gray-1));

    &.blocked {
      overflow: hidden;
    }
  }

  input,
  button {
    font: inherit;
  }

  @media (min-width: 750px) {
    :root {
      --fs-400: 1.75rem;
      --fs-500: 2rem;
      --fs-600: 6.25rem;
    }
  }
`;

export default GlobalStyles;
