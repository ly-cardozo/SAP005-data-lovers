import {
  getPercentage,
  search,
  selectResistant,
  selectType,
  selectWeaknesses,
  sortPokemonsByNameAscending,
  sortPokemonsByNameDescending,
  sortPokemonsByNumAscending,
  sortPokemonsByNumDescending,
} from "./data.js";
import data from "./data/pokemon/pokemon.js";

displayCards(data.pokemon);

function displayCards(pokemons) {
  let printCards = document.querySelector("#print-cards");
  printCards.innerHTML = "";

  const totalOfPokemons = data.pokemon.length;
  const filteredPokemons = pokemons.length;
  const filteredQuantityElement = document.querySelector("#filtered-quantity");
  filteredQuantityElement.innerHTML = "";

  if (filteredPokemons < totalOfPokemons) {
    const filteredQuantityText = document.createElement("p");
    filteredQuantityText.innerText = `Foram encontrados ${filteredPokemons} de ${totalOfPokemons} pokémons (${getPercentage(filteredPokemons, totalOfPokemons).toFixed(2)}%).`;
    filteredQuantityElement.append(filteredQuantityText);
  }

  for (let pokemon of pokemons) {
    const div = document.createElement("div");
    div.classList.add("div-cards");

    const image = document.createElement("img");
    image.src = pokemon.img;
    div.appendChild(image);
    div.classList.add("image-cards");

    const name = document.createElement("h2");
    name.innerHTML = pokemon.name;
    div.appendChild(name);
    div.classList.add("name-cards");

    const number = document.createElement("p");
    number.innerHTML = pokemon.num;
    div.appendChild(number);
    div.classList.add("number-cards");

    const type = document.createElement("p");
    type.innerHTML = pokemon.type;
    div.appendChild(type);
    div.classList.add("type-cards");

    printCards.appendChild(div);
  }
}

const orderlySelect = document.querySelector("#orderly-select");
orderlySelect.addEventListener("change", () => {
  const orderly = orderlySelect.value;
  if (orderly === "NameAscending") {
    sortPokemonsByNameAscending(data.pokemon);
    displayCards(data.pokemon);
  } else if (orderly === "NameDescending") {
    sortPokemonsByNameDescending(data.pokemon);
    displayCards(data.pokemon);
  } else if (orderly === "NumAscending") {
    sortPokemonsByNumAscending(data.pokemon);
    displayCards(data.pokemon);
  } else if (orderly === "NumDescending") {
    sortPokemonsByNumDescending(data.pokemon);
    displayCards(data.pokemon);
  }
});

const filterSelectType = document.querySelector("#filter-select-type");
filterSelectType.addEventListener("change", () => {
  const filterType = filterSelectType.value;
  const displayType = selectType(filterType, data.pokemon);
  displayCards(displayType);
});

const filterSelectResistant = document.querySelector("#filter-select-resistant");
filterSelectResistant.addEventListener("change", () => {
  const filterResistant = filterSelectResistant.value;
  const displayResistant = selectResistant(filterResistant, data.pokemon);
  displayCards(displayResistant);
});

const filterSelectWeaknesses = document.querySelector("#filter-select-weaknesses");
filterSelectWeaknesses.addEventListener("change", () => {
  const filterWeaknesses = filterSelectWeaknesses.value;
  const displayWeaknesses = selectWeaknesses(filterWeaknesses, data.pokemon);
  displayCards(displayWeaknesses);
});

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keyup", () => {
  const searchPokemon = searchInput.value;
  const pokemon = search(searchPokemon, data.pokemon);
  displayCards(pokemon);
});

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
  filterSelectType.value= "";
  filterSelectResistant.value= "";
  filterSelectWeaknesses.value= "";
  searchInput.value= "";
  orderlySelect.value= "";
  displayCards(data.pokemon);
});
