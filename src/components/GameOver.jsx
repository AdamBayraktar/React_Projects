export function GameOver({ gameOver }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>

      {gameOver.game === "Win" ? (
        <p>{gameOver.winner} won!</p>
      ) : (
        <p>It is draw!</p>
      )}
      <p>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Rematch!
        </button>
      </p>
    </div>
  );
}
