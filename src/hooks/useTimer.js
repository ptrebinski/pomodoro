import { useState, useEffect, useCallback } from 'react';

const useTimer = (initialSeconds, { onFinish }) => {
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

  const reset = useCallback(() => {
    pause();
    setSecondsLeft(initialSeconds);
  }, [initialSeconds, pause]);

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
    if (secondsLeft === 0 && isRunning) {
      pause();

      if (typeof onFinish === 'function') {
        onFinish();
      }
    }
  }, [secondsLeft, pause, onFinish, isRunning]);

  return {
    secondsLeft,
    isRunning,
    start,
    pause,
    restart,
    reset,
  };
};

export default useTimer;
