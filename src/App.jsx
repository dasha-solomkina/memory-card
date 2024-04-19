import { useState } from 'react';
import Header from './components/Header';
import GridCards from './components/GridCards';
import Footer from './components/Footer';
import Scores from './components/Scores';

export default function App() {
  const [moves, setMoves] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  const updateScore = (e) => {
    if (!moves.includes(e) && moves.length === 11) {
      alert('uou wooooon');
      setCurrentScore(currentScore + 1);
    } else if (!moves.includes(e)) {
      setCurrentScore(currentScore + 1);
      const newMove = [e, ...moves];
      setMoves(newMove);
    } else if (moves.includes(e)) {
      setCurrentScore(0);
      setMoves([]);
      console.log('there is this value already! ');
    }

    // setMoves((prevMoves) => {
    //   console.log(prevMoves);
    //   return prevMoves;
    // });
    // console.log(moves);
  };

  // useEffect(() => {

  // }, [moves])

  return (
    <>
      <div className="header">
        <Header />
        <Scores currentScore={currentScore} />
      </div>
      <GridCards updateScore={updateScore} />
      <Footer />
    </>
  );
}
