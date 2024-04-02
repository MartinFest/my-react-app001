import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import DisplayNavbar from "./components/NavBar";


function App() {
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

  //création du state
  const [pokemonIndex, setPokemonIndex] = useState(0);
  // console.log('%c⧭ App pokemonIndex', 'color: #1d3f73', pokemonIndex);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <DisplayNavbar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
    </div>
  )
}
// {displayPreviousButton}
// {displayNextButton}
export default App;