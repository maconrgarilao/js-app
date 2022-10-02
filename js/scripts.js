let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  function add(pokemonData) {
    console.log("pokemon", pokemonData)
    pokemonList.push(pokemonData);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = $('.list-group');
    let button = $(`<button type="button" class="btn btn-primary list-group-item list-group-item-action list-group-item-light" data-toggle="modal" data-target=".modal">${pokemon.name}</button>`);
    button.addClass('.list-button');
    pokemonList.append(button);
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
        let pokemonData = {
          name: (pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1),
          detailsUrl: pokemon.url
        };
        add(pokemonData);
      });
    }).catch(function (e) {
      console.error (e)
    })
  };

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
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
