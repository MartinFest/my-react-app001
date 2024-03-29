


function PokemonCard({pokemon}) {

    // console.log(pokemon);

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