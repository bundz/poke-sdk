const axios = require('axios');
const Ability = require('./ability');
const Nature = require('./nature');

class Pokemon {
  constructor(pokemonData) {
    for(const property in pokemonData) {
      this[property] = pokemonData[property];
    }
  }

  
  static async getNature(index) {
    const { data: natureData } = await axios.get(`https://pokeapi.co/api/v2/nature/${index}`);
    return new Nature(natureData);
  }

  static async getAbility(index) {
    const { data: ability } = await axios.get(`https://pokeapi.co/api/v2/ability/${index}`);
    return new Ability(ability);
  }

  static async getById(id) {
    const { data: pokemon } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return new Pokemon(pokemon);
  }
}

module.exports = Pokemon;