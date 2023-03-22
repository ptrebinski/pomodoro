import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import SettingsModal from './components/SettingsModal/SettingsModal';
import SettingsButton, { Wrapper as SettingsButtonWrapper } from './components/SettingsButton';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 0 3rem;
  text-align: center;

  & > h1 {
    font-size: var(--fs-500);
    margin-bottom: 2.5rem;
  }

  ${SettingsButtonWrapper} {
    margin-top: 3rem;
  }
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <GlobalStyles />
      <h1>pomodoro</h1>
      <PomodoroTimer />
      <SettingsButton onClick={() => setIsModalOpen(true)} />
      <SettingsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Wrapper>
  );
}

export default App;
