import React from 'react';
import GameInformation from './GameInformation';
import DeveloperList from './DeveloperList';
import '../Css/aboutus.css'; // Import the CSS file

const AboutUsPage = () => {
  return (
    <div className="center-content">
      <h1>Doggy Maze Adventure</h1>
      <GameInformation />
      <DeveloperList />
    </div>
  );
};

export default AboutUsPage;