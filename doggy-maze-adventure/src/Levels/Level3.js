import React, { useState, useEffect, useCallback, useRef } from 'react';
import MazeBoard from '../MazeBoardLevels/MazeBoardLevel3';
import CongratulationsScreen from '../Screens/WinningLevel3';
import GameOverScreen from '../Screens/GameOverLevel3';
import generateBoard from '../MazeBoardLevels/InitialBoardLevel3';
import "../Css/Level3.css"
import "../Css/ControlsLevel3.css"

const DoggyMaze = () => {
  const [board, setBoard] = useState(generateBoard());
  const [doggyPosition, setDoggyPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const boardRef = useRef(board);
  const [timer, setTimer] = useState(60);
  const [treasureReached, setTreasureReached] = useState(false);

  const decrementTimer = () => {
    setTimer((prevTimer) => Math.max(0, prevTimer - 1));
  };

  const handleKeyDown = useCallback((event) => {
    // Check if congratulations message is shown, and if yes, prevent further movements
    if (showCongratulations) {
      return;
    }

    const { key } = event;

  setDoggyPosition((prevPosition) => {
    const newPosition = { ...prevPosition };

    switch (key) {
      case 'ArrowUp':
        newPosition.y = Math.max(0, newPosition.y - 1);
        break;
      case 'ArrowDown':
        newPosition.y = Math.min(boardRef.current.length - 1, newPosition.y + 1);
        break;
      case 'ArrowLeft':
        newPosition.x = Math.max(0, newPosition.x - 1);
        break;
      case 'ArrowRight':
        newPosition.x = Math.min(boardRef.current[0].length - 1, newPosition.x + 1);
        break;
      default:
        return prevPosition;
    }

    if (boardRef.current[newPosition.y][newPosition.x] !== 'W') {
      // Check if the doggy reached the treasure or bone
      const currentCell = boardRef.current[newPosition.y][newPosition.x];
      if (currentCell === 'T') {
        setTreasureReached(true);
        setShowCongratulations(true);
      } else if (currentCell === 'B') {
        setScore((prevScore) => prevScore + 1);
        setBoard((prevBoard) => {
          const newBoard = [...prevBoard];
          newBoard[newPosition.y][newPosition.x] = ' ';
          return newBoard;
        });
      }

      return newPosition;
    }

    return prevPosition;
  });
}, [setDoggyPosition, setScore, setBoard, boardRef, setShowCongratulations, showCongratulations, setTreasureReached]);

  const handleTouchMove = useCallback((direction) => {
    // Handle touch events for mobile controls
    // Map touch gestures to directions (e.g., swipe left for left, swipe right for right, etc.)
    switch (direction) {
      case 'up':
        handleKeyDown({ key: 'ArrowUp' });
        break;
      case 'down':
        handleKeyDown({ key: 'ArrowDown' });
        break;
      case 'left':
        handleKeyDown({ key: 'ArrowLeft' });
        break;
      case 'right':
        handleKeyDown({ key: 'ArrowRight' });
        break;
      default:
        break;
    }
  }, [handleKeyDown]);

  const resetGameManually = useCallback(() => {
    const newBoard = generateBoard();
    setBoard(newBoard);
    boardRef.current = newBoard;
    setDoggyPosition({ x: 0, y: 0 });
    setScore(0);
    setTimer(60); // Reset the timer to the initial value (adjust as needed)
    setTreasureReached(false); // Reset the treasure reached state
    setShowCongratulations(false);
  }, []);  

  useEffect(() => {
    const handleKeyDownWrapper = (event) => handleKeyDown(event);
    document.addEventListener('keydown', handleKeyDownWrapper);
    return () => {
      document.removeEventListener('keydown', handleKeyDownWrapper);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!treasureReached) {
        decrementTimer();
      }

      if (timer === 0 && !treasureReached) {
        setShowCongratulations(true);
      }
    }, 1000); // decrement every second

    return () => {
      clearInterval(timerInterval);
    };
  }, [treasureReached, timer]);

  useEffect(() => {
    if (showCongratulations) {
      // Delay the resetGameManually function to ensure the message is displayed
      const resetTimeout = setTimeout(() => {
        // Check if the component is still mounted before resetting the game manually
        if (!showCongratulations) {
          resetGameManually();
        }
      }, 2000); // Adjust the delay time as needed (in milliseconds)

      // Clear the timeout if the component unmounts or the game is reset manually
      return () => clearTimeout(resetTimeout);
    }
  }, [showCongratulations, resetGameManually]);

  const isMobile = window.innerWidth <= 499 // Adjust the threshold as needed
  
  return (
    <div className="doggy-mazes-container">
      <h1 className="center-texties">Level 3: Hard Game</h1>
      <h2 className="center-texts">Score: {score}</h2>
      <h2 className="center-texts">Time: {timer} seconds</h2>

      {showCongratulations ? (
        timer === 0 ? (
          <GameOverScreen onTryAgainClick={resetGameManually} />
        ) : (
          <CongratulationsScreen onTryAgainClick={resetGameManually} />
        )
      ) : (
        <div className="maze-board-container">
        <MazeBoard board={board} doggyPosition={doggyPosition} />
        {isMobile && (
          <div className="mobile-controls">
          <button onClick={() => handleTouchMove('up')}>Up</button>
          <button onClick={() => handleTouchMove('left')}>Left</button>
          <button onClick={() => handleTouchMove('right')}>Right</button>
          <button onClick={() => handleTouchMove('down')}>Down</button>
       </div>
        )}
      </div>
    )}
  </div>
);
};

export default DoggyMaze;