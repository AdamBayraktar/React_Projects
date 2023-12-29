import { GameBoard } from "./components/GameBoard";
import { Header } from "./components/Header";
import { Player } from "./components/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  }

  return (
    <>
      <Header></Header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            ></Player>
            <Player
              initialName={"Player 2"}
              symbol="0"
              isActive={activePlayer === "O"}
            ></Player>
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
