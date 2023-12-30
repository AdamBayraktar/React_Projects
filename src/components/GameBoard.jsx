import { useState } from "react";
import { WINNING_COMBINATIONS } from "../winning-combinations";

export function GameBoard({
  onSelectSquare,
  activePlayerSymbol,
  setGameOver,
  gameOver,
}) {
  const [initialGameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  // disable button if game is ended
  let isDisabled = gameOver ? true : false;
  function checkWinner() {
    for (const winningCondion of WINNING_COMBINATIONS) {
      let firstCondition =
        initialGameBoard[winningCondion[0].row][winningCondion[0].column];
      let secondCondition =
        initialGameBoard[winningCondion[1].row][winningCondion[1].column];
      let thirdCondition =
        initialGameBoard[winningCondion[2].row][winningCondion[2].column];
      if (
        firstCondition !== null &&
        firstCondition === secondCondition &&
        firstCondition === thirdCondition
      ) {
        setGameOver({ game: "Win", winner: firstCondition });
        return true;
      }
    }
    return false;
  }

  function checkDraw() {
    for (let row of initialGameBoard) {
      if (row.includes(null)) {
        return false;
      }
    }
    setGameOver({ game: "Draw" });
    return true;
  }

  // check if game is over. Player won or it is draw
  function isGameOver(updatedBoard) {
    // check wining conditions for both player
    // check if it is draw
    if (checkWinner() || checkDraw()) {
      // disablle buttons if game is over
      isDisabled = true;
      console.log("winner");
      return true;
    }
    return false;
  }

  // when game cell is clicked
  function clickHandler(rowIndex, colIndex) {
    // if you click occupied field then break function
    if (initialGameBoard[rowIndex][colIndex] !== null) return undefined;
    // due to status doesn't update immediately
    let updatedBoard = [...initialGameBoard];
    updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    // add symbol
    setGameBoard((board) => {
      const newBoard = [...board];
      newBoard[rowIndex][colIndex] = activePlayerSymbol;
      return newBoard;
    });

    // check if game is ended
    if (isGameOver(updatedBoard)) {
      return undefined;
    }

    // change active player and symbol
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => clickHandler(rowIndex, colIndex)}
                  disabled={isDisabled}
                >
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
