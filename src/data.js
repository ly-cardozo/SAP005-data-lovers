const sortByNum = (a, b) => a.num - b.num;

const sortByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const sortPokemonsByNameAscending = (data) => {
  data.sort(sortByName);
};

export const sortPokemonsByNameDescending = (data) => {
  data.sort(sortByName).reverse();
};

export const sortPokemonsByNumAscending = (data) => {
  data.sort(sortByNum);
};

export const sortPokemonsByNumDescending = (data) => {
  data.sort(sortByNum).reverse();
};

export const selectType = (selectByType, data) => {
  const result = data.filter((pokemon) => pokemon.type.includes(selectByType));
  return result;
};

export const selectResistant = (selectByResistant, data) => {
  return data.filter((pokemon) =>
    pokemon.resistant.includes(selectByResistant)
  );
};

export const selectWeaknesses = (selectByWeaknesses, data) => {
  return data.filter((pokemon) =>
    pokemon.weaknesses.includes(selectByWeaknesses)
  );
};

export const search = (searchName, data) => {
  return data.filter((object) => object.name.startsWith(searchName));
};

// NOTAS:

// 1. O método includes() determina se um array/objeto contém um determinado elemento ou não, retornando true ou false, respectivamente.
//    Use includes() quando: é preciso saber se um array/objeto possui determinado valor/elemento.
// 2. O método startsWith() determina se uma string começa com os caracteres especificados, retornando true ou false.
//    Esse método é case-sensitive (difere maiúsculas de minúsculas, e vice-versa).
// 3. O método filter() vai percorrer todo o array, elemento por elemento, checando se a condição passada como parâmetro da função é verdadeira.
//    Se sim, o item do array é colocado em um novo array, caso a condição não retorne verdadeira, o item simplesmente vai ser ignorado!

// estas funciones son de ejemplo

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};
