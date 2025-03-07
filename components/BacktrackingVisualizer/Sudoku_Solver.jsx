import React from 'react';
import './styles/Sudoku_Solver.css';

const Sudoku_Solver = ({ board }) => {
  return (
    <div className="btv-sudoku-board">
      {board.flat().map((cell, index) => (
        <div
          key={index}
          className={`btv-sudoku-cell ${cell !== 0 ? 'btv-sudoku-cell--fixed' : ''}`}
        >
          {cell !== 0 ? cell : ''}
        </div>
      ))}
    </div>
  );
};

export default Sudoku_Solver;