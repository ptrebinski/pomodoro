import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { Wrapper, TimeDisplay, StyledButton } from './Timer.styles';
import { formatSeconds } from '../../helpers';
import 'react-circular-progressbar/dist/styles.css';

function Timer({ seconds, start, pause, progress, isRunning, completedPomodoros }) {
  return (
    <Wrapper>
      <div>
        <CircularProgressbarWithChildren
          value={progress}
          strokeWidth={3}
          styles={buildStyles({ trailColor: 'transparent' })}
        >
          <span>#{completedPomodoros}</span>
          <TimeDisplay>{formatSeconds(seconds)}</TimeDisplay>
          {isRunning ? (
            <StyledButton onClick={pause}>Pause</StyledButton>
          ) : (
            <StyledButton onClick={start}>Start</StyledButton>
          )}
        </CircularProgressbarWithChildren>
      </div>
    </Wrapper>
  );
}

export default Timer;
