let pokemonList = [
  { name: 'Butterfree', 
    height: 1.1, 
    type: ['bug', 'flying']},
  
  { name: 'Cyndaquil', 
    height: 0.5, 
    type: ['fire']},

  { name: 'Jigglypuff', 
    height: 0.5, 
    type: ['fairy', 'normal']},
]

for (let i = 0; i < pokemonList.height; i++) {
    if (pokemonList[i].height > 1) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!')
    } else if (pokemonList[i].height <= 1 && pokemonList[i].height > 0.5) {
    } else if (pokemonList[i].height <= 1 && pokemonList[i].height > 0.5) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - That\'s a decent size.')
    } else if (pokemonList[i].height < 0.5) {
    } else if (pokemonList[i].height < 0.5) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].weight + ') - That\'s a cute size!')
    }}
