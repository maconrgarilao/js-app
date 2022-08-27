let pokemonRepository = (function () {
  let   repository = [
  
    { name: 'Butterfree', 
    height: 1.1, 
    type: ['bug', 'flying']},
  
    { name: 'Cyndaquil', 
    height: 0.5, 
    type: ['fire']},

    { name: 'Jigglypuff', 
    height: 0.4, 
    type: ['fairy', 'normal']},
    
  ];
  
  
  function add(pokemon) {
      repository.push(pokemon);
  }

  function getAll() {
    return repository;
}

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement('li');
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
})

//    FOR REFERENCE ONLY - 'for' loop 
//    for (let i = 0; i < pokemonList.length; i++) {
//    if (pokemonList[i].height > 1) {
//        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!' + '</p>')
//    } else if (pokemonList[i].height <= 1 && pokemonList[i].height >= 0.5) {
//        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - That\'s a decent size.' + '</p>')
//    } else if (pokemonList[i].height < 0.5) {
//      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - That\'s a cute size!' + '</p>')
//    }}

//    FOR REFERENCE - 'forEach' loop

//    pokemonList.forEach(function(pokemon) {
//    if (pokemon.height > 1) {
//    document.write('<p>' + pokemon.name + ' is ' + pokemon.height + 'm high and is a ' + pokemon.type + ' pokemon!' + ' - Wow, that\'s big!' + '</p>')
//    } else if (pokemon.height <= 1 && pokemon.height >= 0.5) {
//    document.write('<p>' + pokemon.name + ' is ' + pokemon.height + 'm high and is a ' + pokemon.type + ' pokemon!' + ' - That\'s a decent size!' + '</p>')
//    } else if (pokemon.height < 0.5) {
//    document.write('<p>' + pokemon.name + ' is ' + pokemon.height + 'm high and is a ' + pokemon.type + ' pokemon!' + ' - That\'s a cute size!' + '</p>')
//    }
//    })