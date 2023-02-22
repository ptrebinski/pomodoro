import { useContext, useState } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import Input from '../Input';
import { Wrapper, TimeSection, Button } from './SettingsForm.styles';

function SettingsForm({ onClose }) {
  const { minutes, saveSettings } = useContext(SettingsContext);
  const [timeValues, setTimeValues] = useState({
    ...minutes,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTimeValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMinutes = {};
    Object.entries(timeValues).forEach(([key, value]) => (newMinutes[key] = parseInt(value)));

    saveSettings(newMinutes);
    onClose();
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <TimeSection>
        <h3>Time (minutes)</h3>
        <div>
          <Input
            type="number"
            label="pomodoro"
            id="pomodoro"
            min={1}
            value={timeValues.pomodoro}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            label="short break"
            id="shortBreak"
            min={1}
            value={timeValues.shortBreak}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            label="long break"
            id="longBreak"
            min={1}
            value={timeValues.longBreak}
            onChange={handleInputChange}
          />
        </div>
      </TimeSection>

      <Button>Apply</Button>
    </Wrapper>
  );
}

export default SettingsForm;
