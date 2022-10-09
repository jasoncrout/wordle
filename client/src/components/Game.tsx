import Board from "./Board";
import "./Game.css";
import Keyboard from "./Keyboard";

function Game() {
  return (
    <div className="Game">
      <Board />
      <Keyboard />
    </div>
  );
}

export default Game;
