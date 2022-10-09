import { useState } from "react";
import "./Board.css";

function Board() {
  const [board] = useState([
    [
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
    ],
    [
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
    ],
    [
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
    ],
    [
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
    ],
    [
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
    ],
    [
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
      { value: " " },
    ],
  ]);

  return (
    <div className="Board">
      <div className="Board-game">
        {board.map((row, rowIndex) => (
          <div className="Board-row" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div className="Board-cell" key={cellIndex}>
                {cell.value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
