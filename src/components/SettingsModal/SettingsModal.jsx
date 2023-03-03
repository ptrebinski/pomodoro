import ReactDOM from 'react-dom';
import { ReactComponent as CloseIcon } from '../../assets/icons/icon-close.svg';
import { Overlay, Wrapper, Header } from './SettingsModal.styles';
import SettingsForm from '../SettingsForm/SettingsForm';
import { useEffect } from 'react';

function SettingsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('blocked');
    } else {
      document.body.classList.remove('blocked');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Header>
          <h2>Settings</h2>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </Header>
        <SettingsForm onClose={onClose} />
      </Wrapper>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

export default SettingsModal;
