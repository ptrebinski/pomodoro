import { useState, useEffect, useCallback } from 'react';

const useTimer = (initialSeconds) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const restart = useCallback(() => {
    setSecondsLeft(initialSeconds);
    start();
  }, [initialSeconds, start]);

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    if (secondsLeft === 0) {
      pause();
    }
  }, [secondsLeft, pause]);

  return {
    secondsLeft,
    isRunning,
    start,
    pause,
    restart,
  };
};

export default useTimer;
