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

  const [row] = useState(0);

  const addLetter = (letter: string) => {
    setBoard((prevState) => {
      const currentBoard = [...prevState];
      for (let col = 0; col < board[row].length; col++) {
        if (currentBoard[row][col].value === "") {
          currentBoard[row][col].value = letter;
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

  const enter = () => {
    let word = "";
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col].value === "") {
        return null;
      } else {
        word += board[row][col].value;
      }
    }
    return word;
  };

  const checkWin = (guess: string) => {
    let editableAnswer = answer;
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col].value.toLowerCase() === editableAnswer.charAt(col)) {
        editableAnswer = editableAnswer.replace(
          editableAnswer.charAt(col),
          "-",
        );
        setBoard((prevState) => {
          const currentBoard = [...prevState];
          currentBoard[row][col].status = "correct";
          return currentBoard;
        });
      }
    }
    for (let col = 0; col < board[row].length; col++) {
      if (editableAnswer.includes(board[row][col].value.toLowerCase())) {
        editableAnswer = editableAnswer.replace(
          editableAnswer.charAt(
            editableAnswer.indexOf(board[row][col].value.toLowerCase()),
          ),
          "-",
        );
        setBoard((prevState) => {
          const currentBoard = [...prevState];
          board[row][col].status = "present";
          return currentBoard;
        });
      }
    }

    // for (let col = 0; col < board[row].length; col++) {
    //   if (board[row][col].status === "null") {
    //     setBoard((prevState) => {
    //       const currentBoard = [...prevState];
    //       board[row][col].status = "incorrect";
    //       return currentBoard;
    //     });
    //   }
    // }

    //   console.log(editableAnswer);
    // }
    // if (guess.toLowerCase() === answer.toLowerCase()) {
    //   alert("You win!");
    // } else if (row < board.length - 1) {
    //   setRow((prevRow) => prevRow + 1);
    // } else {
    //   alert("You lose!");
    // }
  };

  const setBoardWrapper = (value: string) => {
    if (value === "⌫") {
      removeLetter();
    } else if (value === "enter") {
      const word = enter();
      if (word) {
        checkWin(word);
      }
    } else {
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
