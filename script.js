function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade)
    .then(response => response.json())
    .then(allpokemon => {
        
        var pokemons = [];
        
        allpokemon.results.map((val) =>{
            

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({nome:val.name, Imagem:pokemonSingle.sprites.front_default});

                if(pokemons.length == quantidade){
                    //finalizar requisição 
                    console.log(pokemons);

                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = "";

                    pokemons.map(function(val){
                        
                        pokemonBoxes.innerHTML += `
                            <div class="pokemon-box">
                                <img src="`+val.Imagem+`">
                                <p>`+val.nome+`</p>
                                </div>
                        
                        `
                        
                        /**/
                    })
                }
                

            })


        })

    })
}

var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', ()=>{
    pegaPokemons(quantidade.value);
})

