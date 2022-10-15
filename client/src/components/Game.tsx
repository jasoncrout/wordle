import { useEffect, useState } from "react";
import { words } from "../static/words";
import Board from "./Board";
import "./Game.css";
import Keyboard from "./Keyboard";

function Game() {
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    const randomWord = words[(Math.random() * words.length) | 0];
    document.title = randomWord;
    setAnswer(randomWord);
  }, []);

  const [board, setBoard] = useState([
    [
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
    ],
    [
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
    ],
    [
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
    ],
    [
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
    ],
    [
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
    ],
    [
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
      { value: "", status: "null" },
    ],
  ]);

  const [row, setRow] = useState(0);

  const addLetter = (letter: string) => {
    setBoard((prevState) => {
      const currentBoard = [...prevState];
      for (const cell of currentBoard[row]) {
        if (cell.value === "") {
          cell.value = letter;
          break;
        }
      }
      return currentBoard;
    });
  };

  const removeLetter = () => {
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
  };

  const validateWord = () => {
    let word = "";
    for (const cell of board[row]) {
      if (cell.value === "") {
        return false;
      } else {
        word += cell.value;
      }
    }
    return word;
  };

  const updateBoard = () => {
    const newBoard = [...board];
    const answerArray = answer.split("");

    // set all cells to incorrect
    for (let col = 0; col < board[row].length; col++) {
      newBoard[row][col].status = "incorrect";
    }

    // set correct cells to correct
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col].value.toLowerCase() === answerArray[col]) {
        answerArray[col] = "-";
        newBoard[row][col].status = "correct";
      }
    }

    // set present cells to present
    for (let col = 0; col < board[row].length; col++) {
      if (answerArray.includes(board[row][col].value.toLowerCase())) {
        if (newBoard[row][col].status === "incorrect") {
          answerArray[
            answerArray.indexOf(board[row][col].value.toLowerCase())
          ] = "-";
          newBoard[row][col].status = "present";
        }
      }
    }

    setBoard(newBoard);
  };

  const checkWin = (guess: string) => {
    if (guess.toLowerCase() === answer.toLowerCase()) {
      alert("You win!");
    } else if (row < board.length - 1) {
      setRow((prevRow) => prevRow + 1);
    } else {
      alert("You lose!");
    }
  };

  const setBoardWrapper = (value: string) => {
    switch (value) {
      case "enter":
        const guess = validateWord();
        if (guess) {
          updateBoard();
          checkWin(guess);
        }
        break;
      case "⌫":
        removeLetter();
        break;
      default:
        addLetter(value);
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
