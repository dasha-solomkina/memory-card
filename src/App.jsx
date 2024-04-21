import { useState, useEffect } from 'react';
import Header from './components/Header';
import GridCards from './components/GridCards';
import Footer from './components/Footer';
import Scores from './components/Scores';
import Restart from './components/Restart';
import makePokemonArray from './data';

export default function App() {
  const pokemonArray = makePokemonArray();
  const [moves, setMoves] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const popup = document.querySelector('.overlay');

  // Fisher-Yates Sorting Algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    shuffleArray(pokemonArray);
  }, [currentScore, pokemonArray]);

  const updateScore = (e) => {
    // is a winner?
    if (!moves.includes(e) && moves.length === 11) {
      setCurrentScore(currentScore + 1);
      setBestScore(12);
      popup.classList.remove('hidden');

      // if a card was not chosen before
    } else if (!moves.includes(e)) {
      setCurrentScore(currentScore + 1);

      const newMove = [e, ...moves];
      setMoves(newMove);
      if (currentScore == bestScore) {
        setBestScore(bestScore + 1);
      }

      // if a card was chosen before
    } else if (moves.includes(e)) {
      setCurrentScore(0);
      setMoves([]);
    }
  };

  return (
    <>
      <div className="header">
        <Header />
        <Scores currentScore={currentScore} bestScore={bestScore} />
      </div>
      <GridCards pokemonArray={pokemonArray} updateScore={updateScore} />
      <Footer />
      <Restart />
    </>
  );
}
