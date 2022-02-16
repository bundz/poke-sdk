const axios = require('axios');
const Item = require('./item');
const ItemAttributes = require('./itemAttributes');
const ItemCategories = require('./itemCategories');
const ItemFlingEffects = require('./itemFlingEffects');
const ItemPockets = require('./itemPockets');

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

  async getItemAttributes(index){
    const itemAttributesData = this.itemAttributes[index];
    const { data: itemAttributes } = await axios.get(itemAttributesData.itemAttributes.url);
    return new ItemAttributes(itemAttributes);
  }

  async getItemCategories(index){
    const itemCategoriesData = this.itemCategories[index];
    const { data: itemCategories } = await axios.get(itemCategoriesData.itemCategories.url);
    return new ItemCategories(itemCategories);
  }

  async getItemFlingEffects(index){
    const itemFlingEffectsData = this.itemFlingEffects[index];
    const { data: itemFlingEffects } = await axios.get(itemFlingEffectsData.itemFlingEffects.url);
    return new ItemFlingEffects(itemFlingEffects);
  }

  async getItemPockets(index){
    const itemPocketsData = this.itemPockets[index];
    const { data: itemPockets } = await axios.get(itemPocketsData.itemPockets.url);
    return new ItemPockets(itemPockets);
  }

  static async getCompletedById(id) {
    //Pega o item
    //pega as categorias
    //pega o resto
    //
  }

}

module.exports = Items;