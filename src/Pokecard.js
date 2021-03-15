import React, { Component } from 'react';
import './Pokecard.css';
const poki_api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  render() {
    let id = this.props.id.toString();
    let padded = id.padStart(3, '00');
    // console.log(padded);
    let img_source = `${poki_api}${padded}.png`;
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={img_source} alt={this.props.name} />
        <p className="Pokecard--type">{this.props.type}</p>
        <p className="Pokecard--experience">{this.props.experience}</p>
      </div>
    );
  }
}

export default Pokecard;
