import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const pokemons = props.pokemons.map((pokemon, id) => {
    return (
      <li className="pokemon" key={id}>
        <Pokemon
          name={pokemon.name}
          image={pokemon.url}
          types={pokemon.types.map((pokemon, id) => (
            <span className="pokemonType" key={id}>
              {pokemon}
            </span>
          ))}
        />
      </li>
    );
  });

  return <ul className="pokemonList">{pokemons}</ul>;
};

export default PokeList;
