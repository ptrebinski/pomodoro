import { useEffect, useRef } from 'react';
import alarms from '../assets/sounds';

const useAlarm = (alarm) => {
  const audio = useRef(new Audio());

  const setAudio = (alarm) => {
    audio.current.src = alarms[alarm.sound];
    audio.current.volume = alarm.volume;
  };

  useEffect(() => {
    setAudio(alarm);
  }, [alarm]);

  const play = () => {
    audio.current.play();
  };

  return [play];
};

export default useAlarm;
