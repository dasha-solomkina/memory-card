import { v4 as uuidv4 } from 'uuid';

class Character {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.chosen = false;
    this.id = uuidv4();
  }
}

async function fetchData() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(url, { mode: 'cors' });

    if (response.status === 400) {
      throw new Error('City not found or API request failed');
    }

    const data = await response.json();

    const pokemonArray = data.results.slice(0, 12);
    return pokemonArray;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const fetchedArray = await fetchData();

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

async function makePokemonArray() {
  let finalArr = [];

  await Promise.all(
    fetchedArray.map(async (obj) => {
      const img = await fetchImg(obj.url);
      const newCharacter = new Character(obj.name, img);
      finalArr.push(newCharacter);
    })
  );
  return finalArr;
}

const pokemonArray = await makePokemonArray();

export default pokemonArray;
