import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Timer from './components/Timer/Timer';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 0 3rem;
  text-align: center;

  & > h1 {
    font-size: var(--fs-500);
    margin-bottom: 2.5rem;
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <h1>pomodoro</h1>
      <Timer />
    </Wrapper>
  );
}

export default App;
