/* eslint-disable react/prop-types */

export default function Scores({ currentScore }) {
  return (
    <div className="scores">
      <p>
        Current Score: <span>{currentScore}</span>
      </p>
      <p>
        Best Score: <span>{'bestScore'}</span>
      </p>
    </div>
  );
}
