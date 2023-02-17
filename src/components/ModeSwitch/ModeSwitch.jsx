import { Wrapper, Button } from './ModeSwitch.styles';

const modes = [
  { value: 'pomodoro', label: 'pomodoro' },
  { value: 'shortBreak', label: 'short break' },
  { value: 'longBreak', label: 'long break' },
];

function ModeSwitch({ currentMode, setMode }) {
  return (
    <Wrapper>
      {modes.map(({ value, label }) => (
        <Button key={value} onClick={() => setMode(value)} active={currentMode === value}>
          {label}
        </Button>
      ))}
    </Wrapper>
  );
}

export default ModeSwitch;
