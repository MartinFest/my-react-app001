import PropTypes from  "prop-types"


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

PokemonCard.propTypes ={
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string,
        name:PropTypes.string.isRequired,
    })
}
export default PokemonCard;