import React from 'react';

function InputNumber({ value, onChange, onEnter }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <input
      type="number"
      placeholder="Escribe un número del 1 al 100"
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyDown={handleKeyPress}
      style={{ padding: '8px', width: '80%', fontSize: '1rem' }}
    />
  );
}

export default InputNumber;
