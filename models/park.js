const Park = function(name, ticketprice, collection) {
  this.name = name;
  this.ticketprice = ticketprice;
  this.collection = collection;
}

Park.prototype.addDino = function (dino) {
  this.collection.push(dino);
};

Park.prototype.removeDino = function (dino) {
  let del = this.collection.indexOf(dino);
  this.collection.splice(del, 1);
};

Park.prototype.mostPopular = function () {
  let pop = 0;
  let popdino;
  for (var i = 0; i < this.collection.length; i++) {
    if (pop < this.collection[i].guestsAttractedPerDay) {
      pop = this.collection[i].guestsAttractedPerDay;
      popdino = this.collection[i];
    }
  }
  return popdino;
};

Park.prototype.findSpecies = function (species) {
  let find = [];
  for (var i = 0; i < this.collection.length; i++) {
    if (this.collection[i].species == species) {
      find.push(this.collection[i]);
    }
  }
  return find;
};

Park.prototype.deleteSpecies = function (species) {
  let delarray = [];
  for (var i = 0; i < this.collection.length; i++) {
    if (this.collection[i].species == species) {
      delarray.push(i);
    }
  }
  for (var i = delarray.length -1; i >= 0; i--)
  this.collection.splice(delarray[i],1);
};

Park.prototype.totalVisitors = function () {
  let visitors = 0;
  for (var i = 0; i < this.collection.length; i++) {
      visitors += this.collection[i].guestsAttractedPerDay;
    }
    return visitors;
  };


module.exports = Park;
