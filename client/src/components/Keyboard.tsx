import { useState } from "react";
import "./Keyboard.css";

function Keyboard() {
  const [keyboard] = useState([
    [
      { value: "q", size: 1 },
      { value: "w", size: 1 },
      { value: "e", size: 1 },
      { value: "r", size: 1 },
      { value: "t", size: 1 },
      { value: "y", size: 1 },
      { value: "u", size: 1 },
      { value: "i", size: 1 },
      { value: "o", size: 1 },
      { value: "p", size: 1 },
    ],
    [
      { value: "spacer", size: 0.5 },
      { value: "a", size: 1 },
      { value: "s", size: 1 },
      { value: "d", size: 1 },
      { value: "f", size: 1 },
      { value: "g", size: 1 },
      { value: "h", size: 1 },
      { value: "j", size: 1 },
      { value: "k", size: 1 },
      { value: "l", size: 1 },
      { value: "spacer", size: 0.5 },
    ],
    [
      { value: "enter", size: 1.5 },
      { value: "z", size: 1 },
      { value: "x", size: 1 },
      { value: "c", size: 1 },
      { value: "v", size: 1 },
      { value: "b", size: 1 },
      { value: "n", size: 1 },
      { value: "m", size: 1 },
      { value: "⌫", size: 1.5 },
    ],
  ]);

  return (
    <div className="Keyboard">
      {keyboard.map((row, rowIndex) => (
        <div className="Keyboard-row" key={rowIndex}>
          {row.map((cell, cellIndex) => {
            if (cell.value === "spacer") {
              return (
                <div
                  className="Keyboard-spacer"
                  key={cellIndex}
                  style={{ flex: cell.size }}
                />
              );
            } else {
              return (
                <button
                  className="Keyboard-cell"
                  key={cellIndex}
                  style={{ flex: cell.size }}
                >
                  {cell.value}
                </button>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
