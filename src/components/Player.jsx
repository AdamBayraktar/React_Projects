import { useState } from "react";

export default function Player() {
  const [name, setName] = useState("unknown entity");

  function handleSetName() {
    const input = document.querySelector("input");
    setName(input.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
