import React from "react";

function Square({ value, handleClick, position }) {
  return (
    <button className="square" onClick={() => handleClick(position)}>
      {value}
    </button>
  );
}

export default Square;
