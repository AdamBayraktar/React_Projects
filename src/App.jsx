import { Header } from "./components/Header";
import { Player } from "./components/Player";
import { useState } from "react";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div id="game-container">
          <ol ID="players">
            <Player initialName={"Player 1"} symbol="X"></Player>
            <Player initialName={"Player 2"} symbol="0"></Player>
          </ol>
          GAME BOARD
        </div>
      </main>
    </>
  );
}

export default App;
