const axios = require('axios');
const Item = require('./item');

class Items {
  constructor(itemsData) {
    for(const property in itemsData) {
      this[property] = itemsData[property];
    }
  }
  static async getItem(id){
    const { data: item } = await axios.get(`https://pokeapi.co/api/v2/item/${id}`);
    return new Item(item);
  }

  static async getItemAttributes(id){
    const { data: itemAttributes } = await axios.get(`https://pokeapi.co/api/v2/item-attribute/${id}`);
    return new Item(itemAttributes);
  }

  static async getItemCategories(id){
    const { data: itemCategories } = await axios.get(`https://pokeapi.co/api/v2/item-category//${id}`);
    return new Item(itemCategories);
  }

  static async getItemFlingEffects(id){
    const { data: itemFlingEffects } = await axios.get(`https://pokeapi.co/api/v2/item-fling-effect/${id}`);
    return new Item(itemFlingEffects);
  }

  static async getItemPockets(id){
    const { data: itemPockets } = await axios.get(`https://pokeapi.co/api/v2/item-pocket/${id}`);
    return new Item(itemPockets);
  }

  static async getCompletedById(id) {
    //Pega o item
    //pega as categorias
    //pega o resto
    //
  }

}

module.exports = Items;