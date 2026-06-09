import { useState } from "react";
import Squares from "./Squares";
import JsonTest from "./JsonTest";

function calculateWinner(squares) {
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
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const squares = history[currentMove];

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  const moves = history.map((_, move) => (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>
        {move === 0 ? "Go to start" : `Go to move #${move}`}
      </button>
    </li>
  ));

  return (
    <>
      {" "}
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <div className="board-row">
            <Squares value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Squares value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Squares value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Squares value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Squares value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Squares value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Squares value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Squares value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Squares value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
      <div>
        <JsonTest />
      </div>
    </>
  );
};

export default Board;
