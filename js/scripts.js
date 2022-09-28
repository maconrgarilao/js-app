let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  function add(pokemon) {
    if (typeof pokemon !== 'object') {
      alert('New pokemon must be entered as an object');
    } else if (!('name' in pokemon) || !('detailsUrl' in pokemon)) {
      alert('New pokemon must be entered with item keys name and detailsUrl');
    } else {
      pokemon.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = $('.list-group');
    let listpokemon = $('<li class="list-group-item></li>');
    let button = $(`<button type="button" class="btn list-group-item list-group-item-action list-group-item-light" data-toggle="modal" data-target="exampleModal">${pokemon.name}</button>`);
    button.addClass('.list-button');
    listpokemon.append(button);
    pokemonList.append(listPokemon);
    button.on('click', function () {
      showDetails(pokemon);
    });
  };

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);

    });
  };

  function loadList() {
    return $.ajax(apiUrl).then(function (json) {
      json.results.forEach(function (pokemon) {
        let pokemon = {
          name: (pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1),
          detailsUrl: pokemon.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error (e)
    })
  };

  function loadDetails(pokemon) {
    let url = item.detailsUrl;
    return $.ajax(url).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = [];
      for (var i=0; i < details.types.length; i++) {
        pokemon.types.push(details.types[i].type.name);
      }
    }).catch(function (e) {
      console.error(e);
    });
  };

  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + pokemon.name + "</h1>");
    let imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.attr('src', pokemon.imageUrl);
    let heightElement = $(`<p>Height: ${pokemon.height}</p>`);
    let typesElement = $(`<p>Types: ${pokemon.types}</p>`);

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
  
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };
})();



pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
