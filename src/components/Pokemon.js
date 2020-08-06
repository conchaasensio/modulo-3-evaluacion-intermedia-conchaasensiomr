import React from 'react';

const Pokemon = (props) => {
  const pokemonsType = props.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <div className="pokemonCard">
      <div className="pokemon-image">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className="pokemon-name">
        <h2>{props.name}</h2>
      </div>
      <div>
        <ul className="type">{pokemonsType}</ul>
      </div>
    </div>
  );
};

export default Pokemon;
