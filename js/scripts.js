let pokemonRepository = (function () {
  let   pokemonList = [
  
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
  
  function getAll() {
      return pokemonList;
  }
  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
  }
})();

let pokemonList = pokemonRepository.getAll();

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

pokemonList.forEach(function(pokemon) {
  if (pokemon.height > 1) {
  document.write('<p>' + pokemon.name + ' is ' + pokemon.height + 'm high and is a ' + pokemon.type + ' pokemon!' + ' - Wow, that\'s big!' + '</p>')
} else if (pokemon.height <= 1 && pokemon.height >= 0.5) {
  document.write('<p>' + pokemon.name + ' is ' + pokemon.height + 'm high and is a ' + pokemon.type + ' pokemon!' + ' - That\'s a decent size!' + '</p>')
} else if (pokemon.height < 0.5) {
  document.write('<p>' + pokemon.name + ' is ' + pokemon.height + 'm high and is a ' + pokemon.type + ' pokemon!' + ' - That\'s a cute size!' + '</p>')
}
})

console.log(pokemonRepository.getAll());