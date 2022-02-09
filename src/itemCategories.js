const axios = require('axios');

class ItemCategories {
  constructor(itemCategoriesData) {
    for(const property in itemCategoriesData) {
      this[property] = itemCategoriesData[property];
    }
  }
}

module.exports = ItemCategories;