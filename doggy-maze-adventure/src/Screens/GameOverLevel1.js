import React from 'react';
import { Link } from 'react-router-dom';

const GameOverScreen = ({ onTryAgainClick }) => {
    const handleTryAgainClick = () => {
      // Invoke the onTryAgainClick prop to reset the game
      onTryAgainClick();
    };
  
    return (
      <div className="game-over-screen">
        <h1 className="game-over">Game Over</h1>
        <p>You ran out of time! Better luck next time.</p>
        <button onClick={handleTryAgainClick}>Try Again</button>
        <Link to="/" className="button-over">
          <button onClick={onTryAgainClick}>Home</button>
        </Link>
      </div>
    );
  };
export default GameOverScreen;