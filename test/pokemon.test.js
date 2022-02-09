const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');
const pokemonMock = require('./mocks/pokemon');
const Pokemon = require('../src/pokemon');

describe('Pokemon', () => {
  context('getById with valid values', () => {
    it('should be instance of Pokemon', async () => {
      const stub = sinon.stub(axios, 'get').callsFake(() => ({ data: pokemonMock }));
      const pokemon = await Pokemon.getById(10);
      expect(pokemon).to.be.instanceOf(Pokemon);
      stub.restore();
    });
  });
});