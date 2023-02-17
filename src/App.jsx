import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Timer from './components/Timer/Timer';
import ModeSwitch from './components/ModeSwitch/ModeSwitch';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 0 3rem;
  text-align: center;

  & > h1 {
    font-size: var(--fs-500);
    margin-bottom: 2.5rem;
  }
`;

const minutes = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

function App() {
  const [currentMode, setMode] = useState('pomodoro');

  return (
    <Wrapper>
      <GlobalStyles />
      <h1>pomodoro</h1>
      <ModeSwitch currentMode={currentMode} setMode={setMode} />
      <Timer seconds={minutes[currentMode] * 60} />
    </Wrapper>
  );
}

export default App;
