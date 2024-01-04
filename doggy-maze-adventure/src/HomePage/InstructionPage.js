import React from 'react';
import { useNavigate } from "react-router-dom"
import '../Css/Instructions.css';

const Instructions = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
    <div className="instruction">
      <h2>Instructions</h2>
      <p>Welcome to the Doggy Maze Adventure! Your furry friend needs your help to find his way back to his owner's house.</p>
      <p>In the first level, our furry friend needs to escape from the animal shelter, and its goal is to go to the first stop, which is the supermarket.
      In the second level, our furry friend is now in the supermarket, and its goal is to reach the playground. Last level, our furry friend is now in the playground, and this is it—the final 
      destination that our furry friend needs to overcome. The last destination is at its owner's house. Here are the instructions to guide your doggy through the maze:
      </p>
      <ol>
        <li>Use the arrow keys to navigate your doggy through the maze.</li>
        <li>In each level, there is a timer set, and make sure not to run out of time.</li>
        <li>Avoid obstacles and dead ends to reach the destination.</li>
        <li>Collect bones along the way for bonus points.</li>
        <li>Goodluck! Furry's friend!</li>
      </ol>

      <p>Are you ready for the adventure? Click on "Start Adventure" and guide your doggy to victory!</p>
        <div className="buttons">
        <button onClick={() => { navigate("/Level1");}}>Start Adventure</button>
        </div>

      </div>
      </div>
  );
};

export default Instructions;