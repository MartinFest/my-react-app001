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
  
  const pokemonListLength = pokemonList.length;
  // console.log('%c⧭', 'color: #e50000', pokemonListLength);
   //fonction setter state PREVIOUS


  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <DisplayNavbar pokemonListLength={pokemonListLength} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} />
    </div>
  )
}
// {displayPreviousButton}
// {displayNextButton}
export default App;