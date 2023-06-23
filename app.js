const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const pokemonItems = document.getElementById("pokemon-list")
    const pokemon = document.querySelectorAll(".Pokemon")
    const pokemonName = pokemonItems.getElementsByTagName("h2")

    for(var i=0; i<pokemonName.length; i++){
        let match = pokemon[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                pokemon[i].style.display="";
            } else {
                pokemon[i].style.display="none";
            }
        }
    }

}