import React from 'react';
import "../Css/Level3.css"

const MazeBoard = ({ board, doggyPosition }) => {
  const isBone = (rowIndex, columnIndex) => board[rowIndex][columnIndex] === 'B';
  const isTreasure = (rowIndex, columnIndex) => board[rowIndex][columnIndex] === 'T';

  return (
    <div className="maze-board-container">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="maze-row">
          {row.map((cell, columnIndex) => (
            <div
              key={columnIndex}
              className="maze-celles"
              style={{
                backgroundColor: cell === 'W' ? 'black' : cell === 'T' ? 'Red' : cell === 'D' ? 'Green' : 'transparent',
              }}
            >
              {rowIndex === doggyPosition.y && columnIndex === doggyPosition.x && '🐾'}
              {isBone(rowIndex, columnIndex) && <div className="icon" style={{ color: 'red' }}>🦴</div>}
              {isTreasure(rowIndex, columnIndex) && <div className="icon" style={{ color: 'gold' }}>👤</div>}
              {rowIndex === 0 && columnIndex === 0 && <div className="icon" style={{ color: 'blue' }}>🏬</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MazeBoard;