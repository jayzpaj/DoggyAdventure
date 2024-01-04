import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/WinningLevel3.css'; // Import the CSS file

const CongratulationsScreen = ({ onTryAgainClick }) => {
  return (
    <div className="congratulations-message">
      <p>Congratulations! You finally at your home! Do you want to try again?</p>
      <div className="button-container">
      <Link to="/" className="Link1">
          <button onClick={onTryAgainClick}>Home</button>
        </Link>
        <Link to="/Level1" className="Link2">
          <button onClick={onTryAgainClick}>Try Again</button>
        </Link>
      </div>
    </div>
  );
};

export default CongratulationsScreen;