import React from 'react';
import "../Css/level1.css"

const MazeBoard = ({ board, doggyPosition }) => {
  const isBone = (rowIndex, columnIndex) => board[rowIndex][columnIndex] === 'B';
  const isTreasure = (rowIndex, columnIndex) => board[rowIndex][columnIndex] === 'T';

  return (
    <div className="maze-board-containers">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="maze-row">
          {row.map((cell, columnIndex) => (
            <div
              key={columnIndex}
              className="maze-cellies"
              style={{
                backgroundColor: cell === 'W' ? 'black' : cell === 'T' ? 'Red' : cell === 'D' ? 'Green' : 'transparent',
                backgroundImage: cell === 'W' ? 'url("../bricks.png")' : 'none', // Add the path to your brick texture image
                backgroundSize: 'cover', // Adjust as needed
              }}
            >
              {rowIndex === doggyPosition.y && columnIndex === doggyPosition.x && '🐾'}
              {isBone(rowIndex, columnIndex) && <div className="icons">🦴</div>}
              {isTreasure(rowIndex, columnIndex) && <div className="icons">🏬</div>}
              {rowIndex === 0 && columnIndex === 0 && <div className="icons">🏠</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MazeBoard;