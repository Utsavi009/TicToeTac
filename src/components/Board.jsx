import { useState } from "react";
import Square from "./Square";
import "../index.css";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const renderSquare = (i) => {
    return (
      <Square
        value={square[i]}
        squareClick={() => handleCLick(i)}
        highlightWinner={highlightWinner && highlightWinner.includes(i)}
        winner= {winner}
      />
    );
  };

  const handleCLick = (i) => {
    const squares = square.slice(); // create a copy of square
    if (squares[i] === null) {
      squares[i] = X ? "X" : "0";
      setSquare(squares);
      setX(!X);
    } else {
      alert("Can not do that");
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          winner: squares[a],
          line: lines[i],
        };
      }
    }

    return {
      winner: null,
      line: null,
    };
  };

  const winnerInfo = calculateWinner(square);
  const winner = winnerInfo.winner;
  const highlightWinner = winnerInfo.line;

  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "Player turn: " + (X ? "X" : "0");
  }

  return (
    <div className="board">
      <div>
        {winner ? <h1>{status}</h1> : <p>{status}</p>}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      
      <div className="reset-btn-container">
        <button className={winner ? "reset-after-btn" : "reset-btn"} onClick={() => setSquare(Array(9).fill(null))}>
          {" "}
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Board;
