import {
  sortPokemonsByNameAscending,
  sortPokemonsByNameDescending,
  sortPokemonsByNumAscending,
  sortPokemonsByNumDescending,
  selectType,
  selectResistant,
  selectWeaknesses,
  search,
  getPercentage,
} from "../src/data.js";
//meu método ordena um array de objetos pelo .name de forma crescente a-z

describe("sortPokemonsByNameAscending deve:", () => {
  it("ordenar um array pelo nome de forma crescente", () => {
    const arrayDeObjetosTeste = [
      {
        name: "bulbasaur",
      },
      {
        name: "mew",
      },
      {
        name: "growlithe",
      },
      {
        name: "wartortle",
      },
    ];
    sortPokemonsByNameAscending(arrayDeObjetosTeste);
    const resultadoEsperado = [
      {
        name: "bulbasaur",
      },
      {
        name: "growlithe",
      },
      {
        name: "mew",
      },
      {
        name: "wartortle",
      },
    ];
    expect(arrayDeObjetosTeste).toEqual(resultadoEsperado);
  });
});
describe("sortPokemonsByNameDescending deve:", () => {
  it("ordenar um array pelo nome de forma decrescente", () => {
    const arrayDeObjetosTesteDecrescente = [
      {
        name: "bulbasaur",
      },
      {
        name: "mew",
      },
      {
        name: "growlithe",
      },
      {
        name: "wartortle",
      },
    ];
    sortPokemonsByNameDescending(arrayDeObjetosTesteDecrescente);
    const resultadoEsperadoDecrescente = [
      {
        name: "wartortle",
      },
      {
        name: "mew",
      },
      {
        name: "growlithe",
      },
      {
        name: "bulbasaur",
      },
    ];
    expect(arrayDeObjetosTesteDecrescente).toEqual(resultadoEsperadoDecrescente);
  });
});
describe("sortPokemonsByNumAscending deve:", () => {
  it("ordenar um array pelo numero de forma crescente", () => {
    const arrayDeObjetosTesteNum = [
      {
        num: "251",
      },
      {
        num: "001",
      },
      {
        num: "100",
      },
      {
        num: "008",
      },
    ];
    sortPokemonsByNumAscending(arrayDeObjetosTesteNum);
    const resultadoEsperadoNum = [
      {
        num: "001",
      },
      {
        num: "008",
      },
      {
        num: "100",
      },
      {
        num: "251",
      },
    ];
    expect(arrayDeObjetosTesteNum).toEqual(resultadoEsperadoNum);
  });
});
describe("sortPokemonsByNumDescending deve:", () => {
  it("ordenar um array pelo numero de forma decrescente", () => {
    const arrayDeObjetosTesteNumDecrecente = [
      {
        num: "251",
      },
      {
        num: "001",
      },
      {
        num: "100",
      },
      {
        num: "008",
      },
    ];
    sortPokemonsByNumDescending(arrayDeObjetosTesteNumDecrecente);
    const resultadoEsperadoNumDecrecente = [
      {
        num: "251",
      },
      {
        num: "100",
      },
      {
        num: "008",
      },
      {
        num: "001",
      },
    ];
    expect(arrayDeObjetosTesteNumDecrecente).toEqual(resultadoEsperadoNumDecrecente);
  });
});
describe("selectType deve:", () => {
  it("filtrar um array pelo tipo de pokémon", () => {
    const arrayDeObjetosTipo = [
      {
        name: "victreebel",
        type: [
          "grass",
          "poison",
        ],
      },
      {
        name: "charmander",
        type: [
          "fire"
        ],
      },
      {
        name: "poliwhirl",
        type : [
          "water"
        ],
      },
      {
        name: "tentacool",
        type: [
          "water",
          "poison"
        ],
      },
    ];
    const resultadoEsperaFiltroTipo = [
      {
        name: "charmander",
        type: [
          "fire"
        ],
      },
    ];
    expect(selectType('fire',arrayDeObjetosTipo)).toEqual(resultadoEsperaFiltroTipo);
  });
});
describe("selectResistant deve:", () => {
  it("filtrar um array pela resistencia do pokémon", () => {
    const arrayDeObjetosResistencia = [
      {
        name: "squirtle",
        type: [
          "water",
        ],
        resistant: [
          "fire",
          "water",
          "ice",
          "steel"
        ],
      },
      {
        name: "charmander",
        type: [
          "fire"
        ],
        resistant: [
          "fire",
          "grass",
          "ice",
          "bug",
          "steel"
        ],
      },
      {
        name: "poliwrath",
        type : [
          "water",
          "fighting"
        ],
        resistant: [
          "fire",
          "water",
          "ice",
          "bug",
          "rock"
        ],
      },
      {
        name: "metapod",
        type: [
          "bug",
        ],
        resistant: [
          "grass",
          "fighting",
          "ground"
        ],
      },

    ];
    const resultadoEsperaFiltroResistencia= [
      {
        name: "squirtle",
        type: [
          "water",
        ],
        resistant: [
          "fire",
          "water",
          "ice",
          "steel"
        ],
      },
      {
        name: "poliwrath",
        type : [
          "water",
          "fighting"
        ],
        resistant: [
          "fire",
          "water",
          "ice",
          "bug",
          "rock"
        ],
      },
    ];
    expect(selectResistant("water",arrayDeObjetosResistencia)).toEqual(resultadoEsperaFiltroResistencia);
  });
});
describe("selectWeaknesses deve:", () => {
  it("filtrar um array pela fraquesa do pokémon", () => {
    const arrayDeObjetosFraquesa = [
      {
        name: "natu",
        type: [
          "psychic",
          "flying"
        ],
        resistant: [
          "grass",
          "fighting",
          "ground",
          "psychic"
        ],
        weaknesses: [
          "electric",
          "ice",
          "rock",
          "ghost"
        ],
      },
      {
        name: "clefable",
        type: [
          "normal"
        ],
        resistant: [
          "fighting",
          "bug",
          "dragon",
          "dark"
        ],
        weaknesses: [
          "fighting"
        ],
      },
      {
        name: "poliwrath",
        type : [
          "water",
          "fighting"
        ],
        resistant: [
          "fire",
          "water",
          "ice",
          "bug",
          "rock"
        ],
        weaknesses: [
          "electric",
          "grass",
          "flying",
          "psychic",
          "fairy"
        ],
      },
      {
        name: "abra",
        type: [
          "bpsychicug",
        ],
        resistant: [
          "fighting",
          "psychic"
        ],
        weaknesses: [
          "bug",
          "ghost",
          "dark"
        ],
      },

    ];
    const resultadoEsperaFiltroFraquesa= [
      {
        name: "natu",
        type: [
          "psychic",
          "flying"
        ],
        resistant: [
          "grass",
          "fighting",
          "ground",
          "psychic"
        ],
        weaknesses: [
          "electric",
          "ice",
          "rock",
          "ghost"
        ],
      },
      {
        name: "abra",
        type: [
          "bpsychicug",
        ],
        resistant: [
          "fighting",
          "psychic"
        ],
        weaknesses: [
          "bug",
          "ghost",
          "dark"
        ],
      },
    ];
    expect(selectWeaknesses("ghost",arrayDeObjetosFraquesa)).toEqual(resultadoEsperaFiltroFraquesa);
  });
});
describe("search deve:", () => {
  it("filtrar um array pela letra inicial do nome digitado", () => {
    const arrayDeObjetosPesquisaLetraInicial = [
      {
        name: "pikachu",
        type: [
          "electric",
        ],
      },
      {
        name: "raichu",
        type: [
          "electric"
        ],
      },
      {
        name: "poliwrath",
        type : [
          "water",
          "fighting"
        ],
      },
    ];
    const resultadoEsperadoPesquisaLetraInicial= [
      {
        name: "pikachu",
        type: [
          "electric",
        ],
      },
      {
        name: "poliwrath",
        type : [
          "water",
          "fighting"
        ],
      },
    ];
    expect(search("p",arrayDeObjetosPesquisaLetraInicial)).toEqual(resultadoEsperadoPesquisaLetraInicial);
  });
});
describe("search deve:", () => {
  it("filtrar um array pela nome do pokémon digitado", () => {
    const arrayDeObjetosPesquisaNome = [
      {
        name: "natu",
        type: [
          "psychic",
          "flying"
        ],
        resistant: [
          "grass",
          "fighting",
          "ground",
          "psychic"
        ],
        weaknesses: [
          "electric",
          "ice",
          "rock",
          "ghost"
        ],
      },
      {
        name: "clefable",
        type: [
          "normal"
        ],
        resistant: [
          "fighting",
          "bug",
          "dragon",
          "dark"
        ],
        weaknesses: [
          "fighting"
        ],
      },
      {
        name: "poliwrath",
        type : [
          "water",
          "fighting"
        ],
        resistant: [
          "fire",
          "water",
          "ice",
          "bug",
          "rock"
        ],
        weaknesses: [
          "electric",
          "grass",
          "flying",
          "psychic",
          "fairy"
        ],
      },
      {
        name: "abra",
        type: [
          "bpsychicug",
        ],
        resistant: [
          "fighting",
          "psychic"
        ],
        weaknesses: [
          "bug",
          "ghost",
          "dark"
        ],
      },

    ];
    const resultadoEsperadoPesquisaNome= [
      {
        name: "natu",
        type: [
          "psychic",
          "flying"
        ],
        resistant: [
          "grass",
          "fighting",
          "ground",
          "psychic"
        ],
        weaknesses: [
          "electric",
          "ice",
          "rock",
          "ghost"
        ],
      },
    ];
    expect(search("natu",arrayDeObjetosPesquisaNome)).toEqual(resultadoEsperadoPesquisaNome);
  });
});
describe("getPercentage deve:", () => {
  it("calcular a porcentagem" , () => {
    expect(getPercentage("10",100)).toEqual(10);
  });
});
