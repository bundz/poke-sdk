const axios = require('axios');

class ItemAttributes {
  constructor(itemAttributesData) {
    for(const property in itemAttributesData) {
      this[property] = itemAttributesData[property];
    }
  }
}

module.exports = ItemAttributes;