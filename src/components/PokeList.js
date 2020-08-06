import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

const PokeList = (props) => {
  const pokemons = props.pokemons.map((pokemon) => {
    return (
      <li className="pokemon" key={pokemon.id}>
        <Pokemon
          name={pokemon.name}
          image={pokemon.url}
          types={pokemon.types}
        />
      </li>
    );
  });

  return <ul className="pokemonList">{pokemons}</ul>;
};

PokeList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
};
export default PokeList;
