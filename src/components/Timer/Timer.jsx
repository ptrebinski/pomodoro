import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { Wrapper, TimeDisplay, StyledButton } from './Timer.styles';
import useTimer from '../../hooks/useTimer';
import { formatSeconds, percentage } from '../../helpers';
import 'react-circular-progressbar/dist/styles.css';

function Timer() {
  const initialSeconds = 10;
  const { secondsLeft, isRunning, start, pause, restart } = useTimer(initialSeconds);
  const progressValue = percentage(secondsLeft, initialSeconds);

  const handleClick = () => {
    if (isRunning) {
      pause();
    } else if (secondsLeft === 0) {
      restart();
    } else {
      start();
    }
  };

  const buttonText = isRunning ? 'Pause' : secondsLeft > 0 ? 'Start' : 'Restart';

  return (
    <Wrapper>
      <div>
        <CircularProgressbarWithChildren
          value={progressValue}
          strokeWidth={3}
          styles={buildStyles({ trailColor: 'transparent' })}
        >
          <TimeDisplay>{formatSeconds(secondsLeft)}</TimeDisplay>
          <StyledButton onClick={handleClick}>{buttonText}</StyledButton>
        </CircularProgressbarWithChildren>
      </div>
    </Wrapper>
  );
}

export default Timer;
