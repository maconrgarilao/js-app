let pokemonList = [
  { name: 'Butterfree', 
    height: 1.1, 
    type: ['bug', 'flying']},
  
  { name: 'Cyndaquil', 
    height: 0.5, 
    type: ['fire']},

  { name: 'Jigglypuff', 
    height: 0.4, 
    type: ['fairy', 'normal']},
]

//for (let i = 0; i < pokemonList.length; i++) {
//    if (pokemonList[i].height > 1) {
//        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!' + '</p>')
//    } else if (pokemonList[i].height <= 1 && pokemonList[i].height >= 0.5) {
//        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - That\'s a decent size.' + '</p>')
//    } else if (pokemonList[i].height < 0.5) {
//      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - That\'s a cute size!' + '</p>')
//    }}

pokemonList.forEach(function(pokemon) {
});