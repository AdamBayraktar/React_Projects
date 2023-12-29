import { useState } from "react";

export function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function toggleEditing() {
    setIsEditing((isEditing) => !isEditing);
  }

  // button name depends on mode
  let buttonName = isEditing ? "Save" : "Edit";
  // show label or input depending on edit mode
  let inputField = isEditing ? (
    <input
      type="text"
      className="player-name"
      required
      value={playerName}
      onChange={handleChange}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  // update input/label value
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {inputField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEditing}>{buttonName}</button>
    </li>
  );
}
