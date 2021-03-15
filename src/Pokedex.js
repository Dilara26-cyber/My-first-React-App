import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex Collection</h1>
        <p className="Pokedex--exp">Total Experience: {this.props.exp}</p>
        <p className={this.props.isWinner ? 'Pokedex--win' : 'Pokedex--lost'}>
          {this.props.isWinner ? 'This side wins!' : 'This side loses!'}
        </p>
        <div className="Pokedex__cards">
          {' '}
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              experience={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
