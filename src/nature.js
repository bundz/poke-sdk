const axios = require('axios');

class Nature {
  constructor(natureData) {
    for(const property in natureData) {
      this[property] = natureData[property];
    }
  }
}
module.exports = Nature;