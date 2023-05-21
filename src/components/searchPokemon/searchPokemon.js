export const SearchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error aqui no Serach", error);
  }
};

export const getPokemons = async (limit, offset) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const pokemons = await response.json()
    return pokemons.results;
  } catch (error) {
    console.log("error:", error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error:", error);
  }
};
