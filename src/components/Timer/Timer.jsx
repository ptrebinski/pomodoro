import { useContext, useEffect } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { Wrapper, TimeDisplay, StyledButton } from './Timer.styles';
import useTimer from '../../hooks/useTimer';
import useAlarm from '../../hooks/useAlarm';
import { SettingsContext } from '../../context/SettingsContext';
import { formatSeconds, percentage } from '../../helpers';
import 'react-circular-progressbar/dist/styles.css';

function Timer({ mode }) {
  const { alarm, minutes } = useContext(SettingsContext);
  const seconds = minutes[mode] * 60;
  const [play] = useAlarm(alarm);

  const handleTimerEnd = () => {
    play();
  };

  const { secondsLeft, isRunning, start, pause, restart, reset } = useTimer(seconds, {
    onFinish: handleTimerEnd,
  });

  useEffect(() => {
    reset();
  }, [mode, reset]);

  const progressValue = percentage(secondsLeft, seconds);

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
