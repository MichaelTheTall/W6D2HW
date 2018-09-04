const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dino1 = new Dinosaur('T-Rex', 'carnivore', 500);
    dino2 = new Dinosaur('Dootasaurus', 'omnivore', 2000);
    dino3 = new Dinosaur('Bob', 'herbivore', 1);
    dino4 = new Dinosaur('The one that just screams constantly', 'herbivore', 100);
    dinoseeds = [dino1, dino2, dino3];
    park = new Park('Not strictly Jurrassic Dinosaur Park', 100 , dinoseeds);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Not strictly Jurrassic Dinosaur Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketprice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dino4);
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, dino4]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDino(dino3);
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dino1, dino2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostPopular();
    assert.deepStrictEqual(actual, dino2);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.findSpecies('Dootasaurus');
    assert.deepStrictEqual(actual, [dino2]);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.deleteSpecies('Bob');
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dino1, dino2]);
  });

});
