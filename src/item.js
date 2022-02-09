const axios = require('axios');

class Item {
  constructor(itemData) {
    for(const property in itemData) {
      this[property] = itemData[property];
    }
  }
}

module.exports = Item;