import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
  const [target, setTarget] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  // Generar número aleatorio al montar y reiniciar
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setTarget(randomNum);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  const handleGuessChange = (value) => {
    setGuess(value);
  };

  const checkGuess = () => {
    const numGuess = Number(guess);
    if (!numGuess || numGuess < 1 || numGuess > 100) {
      setMessage('Por favor, ingresa un número entre 1 y 100.');
      return;
    }
    setAttempts(prev => prev + 1);

    if (numGuess === target) {
      setMessage(`¡Correcto! Adivinaste en ${attempts + 1} intento(s).`);
    } else if (numGuess < target) {
      setMessage('El número es mayor');
    } else {
      setMessage('El número es menor');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Adivina el Número</h1>
      <InputNumber value={guess} onChange={handleGuessChange} onEnter={checkGuess} />
      <button onClick={checkGuess} style={{ marginTop: 10, padding: '8px 16px' }}>Adivinar</button>
      <Message message={message} />
      <RestartButton onRestart={resetGame} />
    </div>
  );
}

export default Game;
