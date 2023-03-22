import { useContext, useState } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import Input from '../Input';
import Select from '../Select/Select';
import {
  Wrapper,
  TimeSection,
  Button,
  SoundSection,
  TransitionsSection,
} from './SettingsForm.styles';
import { ReactComponent as VolumeIcon } from '../../assets/icons/icon-volume.svg';
import ToggleSwitchButton from '../ToggleSwitchButton/ToggleSwitchButton';

function SettingsForm({ onClose }) {
  const { minutes, alarm, saveSettings, longBreakInterval, autoStartBreaks, autoStartPomodoros } =
    useContext(SettingsContext);
  const [timeValues, setTimeValues] = useState({ ...minutes });
  const [alarmSound, setAlarmSound] = useState(alarm.sound);
  const [alarmVolume, setAlarmVolume] = useState(alarm.volume);
  const [intervalValue, setIntervalValue] = useState(longBreakInterval);
  const [autoStartBreaksValue, setAutoStartBreaksValue] = useState(autoStartBreaks);
  const [autoStartPomodorosValue, setAutoStartPomodorosValue] = useState(autoStartPomodoros);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTimeValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSoundChange = (sound) => {
    setAlarmSound(sound);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMinutes = {};
    Object.entries(timeValues).forEach(([key, value]) => (newMinutes[key] = parseInt(value)));

    const newAlarm = { sound: alarmSound, volume: parseFloat(alarmVolume) };
    saveSettings({
      minutes: newMinutes,
      alarm: newAlarm,
      longBreakInterval: parseInt(intervalValue),
      autoStartBreaks: autoStartBreaksValue,
      autoStartPomodoros: autoStartPomodorosValue,
    });
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

      <TransitionsSection>
        <Input
          label="Long break interval"
          type="number"
          min={1}
          value={intervalValue}
          onChange={(e) => setIntervalValue(e.target.value)}
        />

        <div>
          <span>Auto Start Breaks</span>
          <ToggleSwitchButton
            id="autoStartBreaks"
            checked={autoStartBreaksValue}
            onChange={() => setAutoStartBreaksValue((prev) => !prev)}
          />
        </div>

        <div>
          <span>Auto Start Pomodoros</span>
          <ToggleSwitchButton
            id="autoStartPomodoros"
            checked={autoStartPomodorosValue}
            onChange={() => setAutoStartPomodorosValue((prev) => !prev)}
          />
        </div>
      </TransitionsSection>

      <SoundSection>
        <h3>Alarm Sound</h3>
        <div>
          <Select
            options={['bell', 'digital', 'kitchen']}
            value={alarmSound}
            onChange={handleSoundChange}
          />
          <Input
            type="range"
            label={<VolumeIcon />}
            id="volume"
            name="volume"
            min={0}
            max={1}
            step={0.05}
            value={alarmVolume}
            onChange={(e) => setAlarmVolume(e.target.value)}
          />
        </div>
      </SoundSection>

      <Button>Apply</Button>
    </Wrapper>
  );
}

export default SettingsForm;
