/* eslint-disable react/prop-types */
import Card from './Card';
// import pokemonArray from '../data';

export default function GridCards({ pokemonArray, updateScore }) {
  return (
    <div className="grid-cards">
      {pokemonArray.map((char) => {
        return (
          <Card
            key={char.id}
            name={char.name}
            img={char.img}
            onClick={() => updateScore(char.id)}
          />
        );
      })}
    </div>
  );
}
