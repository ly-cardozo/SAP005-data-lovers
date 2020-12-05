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
  return data.filter((select) => select.type.includes(selectByType));
};

export const selectResistant = (selectByResistant, data) => {
  return data.filter((select) => select.resistant.includes(selectByResistant));
};

export const selectWeaknesses = (selectByWeaknesses, data) => {
  return data.filter((select) =>
    select.weaknesses.includes(selectByWeaknesses)
  );
};

export const search = (searchName, data) => {
  return data.filter((search) => search.name.startsWith(searchName));
};

export const getPercentage = (quantity, total) => (quantity * 100) / total;

