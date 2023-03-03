import { createContext, useEffect, useState } from 'react';

export const SettingsContext = createContext();

const initialSettings = {
  minutes: { pomodoro: 25, shortBreak: 5, longBreak: 15 },
  alarm: { sound: 'bell', volume: 1 },
};

export function SettingsProvider({ children }) {
  const [minutes, setMinutes] = useState(initialSettings.minutes);
  const [alarm, setAlarm] = useState(initialSettings.alarm);

  useEffect(() => {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings !== null) {
      const { minutes, alarm } = JSON.parse(storedSettings);
      setMinutes(minutes);
      setAlarm(alarm);
    } else {
      localStorage.setItem('settings', JSON.stringify(initialSettings));
    }
  }, []);

  const saveSettings = (newSettings) => {
    setMinutes(newSettings.minutes);
    setAlarm(newSettings.alarm);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  };

  return (
    <SettingsContext.Provider value={{ minutes, alarm, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
