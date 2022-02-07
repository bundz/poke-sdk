const axios = require('axios');

class Ability {
  constructor(abilityData) {
    for(const property in abilityData) {
      this[property] = abilityData[property];
    }
  }
}

module.exports = Ability;