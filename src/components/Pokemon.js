import React from 'react';

const Pokemon = (props) => {
  const pokemonsType = props.types.map((type, id) => {
    return <li key={id}>{type}</li>;
  });
  return (
    <div className="pokemonCard">
      <div className="pokemon-image">
        <img src={props.url} alt={props.name}></img>
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
