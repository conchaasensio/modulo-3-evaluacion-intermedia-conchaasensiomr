import React, { useState } from 'react';
import '../stylesheets/App.css';
import PokeList from './PokeList';
import pokemonsFromApi from '../data/pokemons.json';

const App = () => {
  const [pokemons] = useState(pokemonsFromApi);

  return (
    <div className="App">
      <h1>Mi lista de Pokemon</h1>
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
