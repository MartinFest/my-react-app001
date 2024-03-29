import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  //création du state
  const [pokemonIndex, setPokemonIndex] = useState(0);
  console.log('%c⧭', 'color: #e50000', pokemonIndex);

  //fonction setter state
  const handleClickPrevious = () => {
   setPokemonIndex(pokemonIndex - 1);
    // console.log('%c⧭', 'color: #00a3cc', pokemonIndex);
    // pokemonList[pokemonIndexValue][name]
  }

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
    // console.log('%c⧭', 'color: #aa00ff', pokemonIndex);
  }

  //btn précédent
  const previousButton = <button onClick={handleClickPrevious}>Précédent</button>;
  let displayPreviousButton = pokemonIndex > 0 ? previousButton : '';

  //btn suivant
  const nextButton = <button onClick={handleClickNext}>Suivant</button>;
  let displayNextButton = pokemonIndex < pokemonList.length - 1 ? nextButton : '';
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {displayPreviousButton}
      {displayNextButton}
    </div>
  )
}

export default App;