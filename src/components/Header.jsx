import reactIMG from "../../public/game-logo.png";

export function Header() {
  return (
    <header>
      <img src={reactIMG} alt="Hand-drawn tic tac toe board" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
}
