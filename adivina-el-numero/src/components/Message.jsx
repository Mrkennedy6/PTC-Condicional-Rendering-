import React from 'react';

function Message({ message }) {
  if (!message) return null;

  return (
    <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{message}</p>
  );
}

export default Message;
