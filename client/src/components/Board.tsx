import "./Board.css";

interface BoardProps {
  board: { value: string; status: string }[][];
}

function Board({ board }: BoardProps) {
  const colorMap = {
    null: "",
    correct: "#538d4e",
    present: "#b59f3b",
    incorrect: "#3a3a3c",
  };

  return (
    <div className="Board">
      <div className="Board-game">
        {board.map((row, rowIndex) => (
          <div className="Board-row" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div
                className="Board-cell"
                key={cellIndex}
                style={{
                  backgroundColor:
                    colorMap[cell.status as keyof typeof colorMap],
                }}
              >
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
