import { useState } from "react";
import "./Keyboard.css";

interface KeyboardProps {
  board: { value: string }[][];
  setBoard: (value: string) => void;
}

function Keyboard({ board, setBoard }: KeyboardProps) {
  const [keyboard] = useState([
    [
      { value: "Q", size: 1 },
      { value: "W", size: 1 },
      { value: "E", size: 1 },
      { value: "R", size: 1 },
      { value: "T", size: 1 },
      { value: "Y", size: 1 },
      { value: "U", size: 1 },
      { value: "I", size: 1 },
      { value: "O", size: 1 },
      { value: "P", size: 1 },
    ],
    [
      { value: "spacer", size: 0.5 },
      { value: "A", size: 1 },
      { value: "S", size: 1 },
      { value: "D", size: 1 },
      { value: "F", size: 1 },
      { value: "G", size: 1 },
      { value: "H", size: 1 },
      { value: "J", size: 1 },
      { value: "K", size: 1 },
      { value: "L", size: 1 },
      { value: "spacer", size: 0.5 },
    ],
    [
      { value: "enter", size: 1.5 },
      { value: "Z", size: 1 },
      { value: "X", size: 1 },
      { value: "C", size: 1 },
      { value: "V", size: 1 },
      { value: "B", size: 1 },
      { value: "N", size: 1 },
      { value: "M", size: 1 },
      { value: "⌫", size: 1.5 },
    ],
  ]);

  const onKeyPress = (value: string) => {
    setBoard(value);
  };

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
                  onClick={() => onKeyPress(cell.value)}
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
