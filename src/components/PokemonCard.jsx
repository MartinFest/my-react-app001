
const pokemonList = [
    {
        name: "bulbasaur22",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",

    },
];

function PokemonCard() {

    const pokemon = pokemonList[1]; 

    const pokemonImg = pokemon.imgSrc === undefined ? '<p>???</p>' :  pokemon.imgSrc === '' ? '<p>???</p>' : <img src={pokemon.imgSrc} alt={pokemon.name} />;
    return (
        <>
            <figure>
                {pokemonImg}
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        </>);
}
export default PokemonCard;