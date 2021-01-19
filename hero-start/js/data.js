// Dades globals
// export const magic = ["fire", "ice", "lightning", "wind"];
// export const weapons = ["crossbow", "sword", "hatchet", "shield"];
//export const character = ["witcher", "aragon", "vampire", "sirocu"];

// esta forma lo que hara es coger el nombre de cualquier personaje tengamos en la pagina
export const character = {
  witcher: "The Witcher",
  aragon: "Aragon",
  vampire: "Vampire",
  sirocu: "Sirocu",
};

// JSON
// export const gem = [
//   { name: "esmerald", fire: 2, ice: 2 },
//   { name: "ruby", fire: 2, ice: 1 },
//   { name: "diamond", fire: 2, wind: 2 },
//   { name: "sapphire", lightning: 2, wind: 2 },
// ];

// Objeto del estado actual
export let stateHero = {
  name: "witcher",
  fullName: "The Witcher",
  skills: {
    attack: 4,
    defense: 3,
    speed: 5
  },
  aMagic: [],
  aWeapons: [],
  aGem: [],

  // calculateIncrementMagic: function (gem) {
  //   return this.crossbow + this.magic.fire;
  // },

  calculateAttack: function () {
    let pointsItems = this.aWeapons.length + this.aMagic.length;
    return this.skills.attack + pointsItems;
  },
  calculateDefense: function () {
    let pointsItems = 0;
    let found = this.aWeapons.find(e => e == 'shield');
    if (found) pointsItems++;
    return this.skills.defense + pointsItems;
  },

  // es ta funcion lo que hara  remover los item cuando queramos elegir un nuevo item
  clear: function() {
    this.aMagic = [];
    this.aWeapons = [];
    this.aGem = [];
  },

  // se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
  getItems: function(){
    let items = [];
    return items.concat(this.aMagic).concat(this.aWeapons).concat(this.aGem);
  }
};