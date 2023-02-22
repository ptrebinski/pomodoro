import ReactDOM from 'react-dom';
import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';
import { Overlay, Wrapper, Header } from './SettingsModal.styles';
import SettingsForm from '../SettingsForm/SettingsForm';

function SettingsModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose} />
      <Wrapper>
        <Header>
          <h2>Settings</h2>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </Header>
        <SettingsForm onClose={onClose} />
      </Wrapper>
    </>,
    document.getElementById('modal-root')
  );
}

export default SettingsModal;
