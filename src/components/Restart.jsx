export default function Restart() {
  const popup = document.querySelector('.overlay');
  function handleClick() {
    popup.classList.add('hidden');
    window.location.reload();
  }

  return (
    <div className="overlay hidden">
      <div className="pop-content">
        <h2>You won!</h2>
        <button onClick={handleClick}>Restart the game</button>
      </div>
    </div>
  );
}
