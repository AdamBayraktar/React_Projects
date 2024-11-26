import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, handleReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - formattedTime / targetTime) * 100);

  return (
    <dialog ref={ref} className="result-modal">
      <h2>{userLost ? "You Lost" : `YOUR SCORE: ${score}`}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button onClick={handleReset}>close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
