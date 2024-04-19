/* eslint-disable react/prop-types */
import Card from './Card';
import pokemonArray from '../data';
// import { useState, useEffect } from 'react';

//Fisher-Yates Sorting Algorithm
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

//onClick
// function handleShuffle() {
//   console.log(pokemonArray);
//   const newArrT = shuffleArray(pokemonArray);
//   console.log(newArrT);
//     return shuffleArray(pokemonArray);
// }

export default function GridCards({ updateScore }) {
  //   function handleClickF(id) {
  //     //   console.log(e.target);
  //     console.log(id);
  //   }

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
