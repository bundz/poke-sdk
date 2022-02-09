const axios = require('axios');

class ItemPockets {
  constructor(itemPocketsData) {
    for(const property in itemPocketsData) {
      this[property] = itemPocketsData[property];
    }
  }
}

module.exports = ItemPockets;