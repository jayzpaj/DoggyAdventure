import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/WinningLevel1.css'; // Import the CSS file

const CongratulationsScreen = ({ onTryAgainClick }) => {
  return (
    <div className="congratulations-message">
      <p>Congratulations! You have escaped to the animal shelter! Now you are in a supermarket. Press the button to proceed to the next destination.</p>
      <div className="button-containers">
        <Link to="/Level2" className="Link2">
          <button onClick={onTryAgainClick}>Next Level</button>
        </Link>
      </div>
    </div>
  );
};

export default CongratulationsScreen;