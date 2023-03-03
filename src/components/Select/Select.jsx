import { useEffect, useState } from 'react';
import { Option, OptionsList, Wrapper } from './Select.styles';

function Select({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  const handleKeyDown = (e) => {
    switch (e.code) {
      case 'Enter':
      case 'Space':
        setIsOpen((prev) => !prev);

        if (isOpen) {
          onChange(options[highlightedIndex]);
        }
        break;
      case 'ArrowUp':
      case 'ArrowDown': {
        if (!isOpen) {
          setIsOpen(true);
          break;
        }

        const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
        if (newValue >= 0 && newValue < options.length) {
          setHighlightedIndex(newValue);
        }
        break;
      }
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
    >
      <span>{value}</span>

      <OptionsList isOpen={isOpen}>
        {options.map((option, index) => (
          <Option
            key={option}
            onMouseEnter={() => setHighlightedIndex(index)}
            onClick={() => onChange(option)}
            isSelected={option === value}
            isHighlighted={highlightedIndex === index}
          >
            {option}
          </Option>
        ))}
      </OptionsList>
    </Wrapper>
  );
}

export default Select;
