import React, { useEffect, useState } from 'react';
import './App.css';
import { Home } from './components/pages/home';
import FilePokemon from './components/filePokemon/FilePokemon';
import Pokedex from './components/pokedex/pokedex';
import { SearchPokemon, getPokemonData, getPokemons } from './components/searchPokemon/searchPokemon';
import Button from './components/button/button';



function App() {


  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(10)

  const fetchPokemons = async () => {
    try {
      
      setLoading(true)
      setNotFound(false)
      const data = await getPokemons(limit);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });


      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log('errou');
    }
    
  }


  useEffect(() => {
    fetchPokemons()
  },[limit])

  
  const onSearhHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await SearchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
    }
    setLoading(false)
  }

  const add = () =>{
    setLimit(limit + 10)
  }

  

  return (
    <div>
      <Home />
      <FilePokemon onSearch={onSearhHandler} />
      {notFound ? (
        <div>ih! esse não tem!</div>) :

        (<Pokedex pokemons={pokemons} loading={loading} />)}
      <Button Onclick={add} />
     

    </div>

  )
}

export default App
