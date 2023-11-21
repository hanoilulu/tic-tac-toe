import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square position={0} value={squares[0]} handleClick={handleClick}></Square>
          <Square position={1} value={squares[1]} handleClick={handleClick}></Square>
          <Square position={2} value={squares[2]} handleClick={handleClick}></Square>
        </div>
        <div className="board-row">
          <Square position={3} value={squares[3]} handleClick={handleClick}></Square>
          <Square position={4} value={squares[4]} handleClick={handleClick}></Square>
          <Square position={5} value={squares[5]} handleClick={handleClick}></Square>
        </div>
        <div className="board-row">
          <Square position={6} value={squares[6]} handleClick={handleClick}></Square>
          <Square position={7} value={squares[7]} handleClick={handleClick}></Square>
          <Square position={8} value={squares[8]} handleClick={handleClick}></Square>
        </div>
      </div>
    </div>
  );
}
