import React from 'react';

function RestartButton({ onRestart }) {
  return (
    <button
      onClick={onRestart}
      style={{
        marginTop: '1.5rem',
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer'
      }}
    >
      Reiniciar Juego
    </button>
  );
}

export default RestartButton;
