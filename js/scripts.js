let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
}

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement('li');
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event){
      showDetails(pokemon)
    })
  };

  function showDetails(pokemon) {
    console.log(pokemon);
  };

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error (e)
    })
  };

  function loadDetails() {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

//  adding an image  //

var img = document.createElement("img");

img.src = "img/map.svg";
var src = document.getElementById("x");

src.appendChild(img);

//  end code for adding an image  //

// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});


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