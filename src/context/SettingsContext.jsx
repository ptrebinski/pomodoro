import { createContext, useEffect, useState } from 'react';

export const SettingsContext = createContext();

const initialSettings = {
  minutes: { pomodoro: 25, shortBreak: 5, longBreak: 15 },
  alarm: { sound: 'bell', volume: 1 },
  longBreakInterval: 4,
  autoStartBreaks: true,
  autoStartPomodoros: false,
};

export function SettingsProvider({ children }) {
  const [minutes, setMinutes] = useState(initialSettings.minutes);
  const [alarm, setAlarm] = useState(initialSettings.alarm);
  const [longBreakInterval, setLongBreakInterval] = useState(initialSettings.longBreakInterval);
  const [autoStartBreaks, setAutoStartBreaks] = useState(initialSettings.autoStartBreaks);
  const [autoStartPomodoros, setAutoStartPomodoros] = useState(initialSettings.autoStartPomodoros);

  useEffect(() => {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings !== null) {
      const { minutes, alarm, longBreakInterval, autoStartBreaks, autoStartPomodoros } =
        JSON.parse(storedSettings);
      setMinutes(minutes);
      setAlarm(alarm);
      setLongBreakInterval(longBreakInterval);
      setAutoStartBreaks(autoStartBreaks);
      setAutoStartPomodoros(autoStartPomodoros);
    } else {
      localStorage.setItem('settings', JSON.stringify(initialSettings));
    }
  }, []);

  const saveSettings = (newSettings) => {
    setMinutes(newSettings.minutes);
    setAlarm(newSettings.alarm);
    setLongBreakInterval(newSettings.longBreakInterval);
    setAutoStartBreaks(newSettings.autoStartBreaks);
    setAutoStartPomodoros(newSettings.autoStartPomodoros);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  };

  return (
    <SettingsContext.Provider
      value={{
        minutes,
        alarm,
        longBreakInterval,
        autoStartBreaks,
        autoStartPomodoros,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
