import { useState } from "react";
import Board from "./Board";
import "./Game.css";
import Keyboard from "./Keyboard";

function Game() {
  const [board, setBoard] = useState([
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  ]);

  const [row] = useState(0);

  const setBoardWrapper = (value: string) => {
    if (!(value === "⌫")) {
      setBoard((prevState) => {
        const currentBoard = [...prevState];
        for (let col = 0; col < board[row].length; col++) {
          if (currentBoard[row][col].value === "") {
            currentBoard[row][col].value = value;
            break;
          }
        }
        return currentBoard;
      });
    } else {
      setBoard((prevState) => {
        const currentBoard = [...prevState];
        for (let col = 0; col < board[row].length; col++) {
          if (currentBoard[row][col].value === "") {
            if (col === 0) {
              currentBoard[row][col].value = "";
            } else {
              currentBoard[row][col - 1].value = "";
            }
            break;
          }
          if (col === board[row].length - 1) {
            currentBoard[row][col].value = "";
          }
        }
        return currentBoard;
      });
    }
  };

  return (
    <div className="Game">
      <Board board={board} />
      <Keyboard board={board} setBoard={setBoardWrapper} />
    </div>
  );
}

export default Game;
