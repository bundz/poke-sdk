const axios = require('axios');
const Ability = require('./ability');

class Pokemon {
  constructor(pokemonData) {
    for(const property in pokemonData) {
      this[property] = pokemonData[property];
    }
  }

  async getAbility(index) {
    const abilityData = this.abilities[index];
    const { data: ability } = await axios.get(abilityData.ability.url);
    return new Ability(ability);
  }

  static async getById(id) {
    const { data: pokemon } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return new Pokemon(pokemon);
  }
}

module.exports = Pokemon;