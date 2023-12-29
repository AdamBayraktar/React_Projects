import { useState } from "react";

export function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  if (!isEditing) {
    return (
      <li>
        <span className="player">
          <span className="player-name">{playerName}</span>
          <span className="player-symbol">{symbol}</span>
        </span>
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </li>
    );
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li>
      <span className="player">
        <input
          type="text"
          className="player-name"
          required
          value={playerName}
          onChange={handleChange}
        />
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setIsEditing(false);
          setPlayerName("Adam");
        }}
      >
        Save
      </button>
    </li>
  );
}
