const axios = require('axios');

class ItemFlingEffects {
  constructor(itemFlingEffectsData) {
    for(const property in itemData) {
      this[property] = itemFlingEffectsData[property];
    }
  }
}

module.exports = ItemFlingEffects;