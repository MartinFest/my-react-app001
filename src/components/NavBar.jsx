//   function Navbar(pokemonIndex) {
function Navbar({ pokemonList, setPokemonIndex }) {
    // console.log('%c⧭ pokemonIndex', 'color: #006dcc', pokemonIndex);
    // console.log('%c⧭ pokemonList ', 'color: #731d6d', pokemonList);

    return (
        <>
            {
            pokemonList.map((quelPokemon, index) =>(
            <button onClick={() => setPokemonIndex(index)} key={quelPokemon.name}>{quelPokemon.name}</button>
            ))
            }
        </>
    )
}

export default Navbar;