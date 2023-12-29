import { useState } from "react";

export function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [initialGameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  function clickHandler(rowIndex, colIndex) {
    if (initialGameBoard[rowIndex][colIndex] !== null) return undefined;
    setGameBoard((board) => {
      const newBoard = [...board];
      newBoard[rowIndex][colIndex] = symbol;
      return newBoard;
    });
    onSelectSquare();

    let symbol = activePlayerSymbol;
  }

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => clickHandler(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
