import { useState } from "react";
import "./Keyboard.css";

function Keyboard() {
  const [keyboard] = useState([
    [
      { key: "q", size: 1 },
      { key: "w", size: 1 },
      { key: "e", size: 1 },
      { key: "r", size: 1 },
      { key: "t", size: 1 },
      { key: "y", size: 1 },
      { key: "u", size: 1 },
      { key: "i", size: 1 },
      { key: "o", size: 1 },
      { key: "p", size: 1 },
    ],
    [
      { key: "spacer", size: 0.5 },
      { key: "a", size: 1 },
      { key: "s", size: 1 },
      { key: "d", size: 1 },
      { key: "f", size: 1 },
      { key: "g", size: 1 },
      { key: "h", size: 1 },
      { key: "j", size: 1 },
      { key: "k", size: 1 },
      { key: "l", size: 1 },
      { key: "spacer", size: 0.5 },
    ],
    [
      { key: "enter", size: 1.5 },
      { key: "z", size: 1 },
      { key: "x", size: 1 },
      { key: "c", size: 1 },
      { key: "v", size: 1 },
      { key: "b", size: 1 },
      { key: "n", size: 1 },
      { key: "m", size: 1 },
      { key: "⌫", size: 1.5 },
    ],
  ]);

  return (
    <div className="Keyboard">
      {keyboard.map((row, rowIndex) => (
        <div className="Keyboard-row" key={rowIndex}>
          {row.map((cell, cellIndex) => {
            if (cell.key === "spacer") {
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
                  {cell.key}
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
