const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const pokemonItems = document.getElementById("pokemon-list")
    const pokemon = document.querySelectorAll(".Pokemon")
    const pokemonName = pokemonItems.getElementsByTagName("h2")

    for(let i=0; i<pokemonName.length; i++){
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

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }



function fetchPokemonData(){
    //Forgot to save pokemon ID numbers in the JSON so going to add a counter to combat issue
    fetch('pokemon_data.json')
        .then(response => response.json())
        .then(data => {
            const pokemonList = document.getElementById('pokemon-list');

            for(const pokemonName in data){
                const pokemon = data[pokemonName];

                const pokemonDiv = document.createElement('div');
                pokemonDiv.classList.add('pokemon');

                const pokemonImg = document.createElement('img');
                pokemonImg.src = `Pokemon Data/images/${pokemon.Name.toLowerCase()}.png`;
                pokemonImg.alt = '';

                const pokemonDetailsDiv = document.createElement('div');
                pokemonDetailsDiv.classList.add('pokemon-details');

                const pokemonNameHeading = document.createElement('h2');
                pokemonNameHeading.textContent=capitalizeFirstLetter(pokemon.Name);

                const pokemonIDHeading = document.createElement('h2');
                pokemonIDHeading.textContent=pokemon.ID;

                const type1Heading = document.createElement('h3');
                type1Heading.textContent=pokemon.Type1;

                //Append elements to the DOM

                pokemonDetailsDiv.appendChild(pokemonNameHeading);
                pokemonDetailsDiv.appendChild(pokemonIDHeading);
                pokemonDetailsDiv.appendChild(type1Heading);
                
                // Appending this element at the end to follow order of type to ensure element is placed in correct position when added into HTML
                if(pokemon.Type2 && pokemon.Type2 !== ''){
                    const type2Heading = document.createElement('h3');
                    type2Heading.textContent=pokemon.Type2;
                    pokemonDetailsDiv.appendChild(type2Heading);
                }

               
                

                pokemonDiv.appendChild(pokemonImg);
                pokemonDiv.appendChild(pokemonDetailsDiv);

                pokemonList.appendChild(pokemonDiv);
            }
        })
}