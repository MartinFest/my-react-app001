//   function DisplayNavbar(pokemonIndex) {
function DisplayNavbar({ pokemonListLength, pokemonIndex, setPokemonIndex }) {

    //fonction setter state PREV
    const handleClickPrevious = () => setPokemonIndex(pokemonIndex - 1);

    //fonction setter state NEXT
     const handleClickNext = () => setPokemonIndex(pokemonIndex + 1);

    //btn précédent
    const previousButton = <button onClick={handleClickPrevious}>Précédent</button>;
    let displayPreviousButton = pokemonIndex > 0 ? previousButton : '';
    // console.log('%c⧭ pokemonIndex : ', 'color: #0088cc', pokemonIndex);

    //btn suivant
    const nextButton = <button onClick={handleClickNext} >Suivant</button>;
    let displayNextButton = pokemonIndex < pokemonListLength - 1 ? nextButton : '';

    return (
        <>
            {displayPreviousButton}
            {displayNextButton}
        </>
    )
}

export default DisplayNavbar;