import { useContext, useState } from 'react';
import ModeSwitch from '../ModeSwitch/ModeSwitch';
import Timer from '../Timer/Timer';
import useAlarm from '../../hooks/useAlarm';
import useTimer from '../../hooks/useTimer';
import { SettingsContext } from '../../context/SettingsContext';
import { percentage } from '../../helpers';

function PomodoroTimer() {
  const [currentMode, setMode] = useState('pomodoro');
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  const { alarm, minutes, longBreakInterval, autoStartBreaks, autoStartPomodoros } =
    useContext(SettingsContext);

  const seconds = minutes[currentMode] * 60;

  const [play] = useAlarm(alarm);

  const handleTimerEnd = () => {
    if (alarm.volume > 0) {
      play();
    }
    goToNextMode();
  };

  const { secondsLeft, isRunning, start, pause, reset } = useTimer(seconds, {
    onFinish: handleTimerEnd,
  });

  const changeMode = (mode, autoStart = false) => {
    setMode(mode);
    reset();
    if (autoStart) start();
  };

  const goToNextMode = () => {
    if (currentMode === 'pomodoro') {
      const newCompletedPomodoros = completedPomodoros + 1;
      setCompletedPomodoros(newCompletedPomodoros);

      const nextMode = newCompletedPomodoros % longBreakInterval === 0 ? 'longBreak' : 'shortBreak';
      changeMode(nextMode, autoStartBreaks);
    } else {
      changeMode('pomodoro', autoStartPomodoros);
    }
  };

  const progress = percentage(secondsLeft, seconds);

  return (
    <div>
      <ModeSwitch currentMode={currentMode} setMode={changeMode} />
      <Timer
        seconds={secondsLeft}
        isRunning={isRunning}
        progress={progress}
        completedPomodoros={completedPomodoros}
        start={start}
        pause={pause}
      />
    </div>
  );
}

export default PomodoroTimer;
