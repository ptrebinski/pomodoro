import { createContext, useEffect, useState } from 'react';

export const SettingsContext = createContext();

const initialMinutes = { pomodoro: 25, shortBreak: 5, longBreak: 15 };

export function SettingsProvider({ children }) {
  const [minutes, setMinutes] = useState(initialMinutes);

  useEffect(() => {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings !== null) {
      setMinutes(JSON.parse(storedSettings));
    } else {
      localStorage.setItem('settings', JSON.stringify(initialMinutes));
    }
  }, []);

  const saveSettings = (newSettings) => {
    setMinutes(newSettings);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  };

  return (
    <SettingsContext.Provider value={{ minutes, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
