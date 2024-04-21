import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

class Character {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.id = uuidv4();
  }
}

async function fetchData() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(url, { mode: 'cors' });

    if (response.status === 400) {
      throw new Error('API request failed');
    }

    const data = await response.json();

    const pokemonArray = data.results.slice(0, 12);
    return pokemonArray;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function fetchImg(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (response.status === 400) {
      throw new Error('City not found or API request failed');
    }

    const data = await response.json();
    const img = data.sprites.other['official-artwork'].front_default;
    return img;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default function MakePokemonArray() {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    async function fetchDataAndSetPokemonArray() {
      try {
        const fetchedArray = await fetchData();
        const finalArr = await Promise.all(
          fetchedArray.map(async (obj) => {
            const img = await fetchImg(obj.url);
            return new Character(obj.name, img);
          })
        );
        setPokemonArray(finalArr);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchDataAndSetPokemonArray();
  }, []);

  return pokemonArray;
}
