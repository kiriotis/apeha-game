export const mage = {
  img: "./assets/main_assets/mage.png",
  class: "Mage",
  health: 75,
  mana: 125,
  physical_def: 5,
  magical_def: 10,
  skills: {
    "Fire ball": { type: "magic",  mag_damage: 10, cost: 0 },
    "Earth ball": { type: "combine", damage: 12, mag_damage: 12, cost: 10 },
    "Light bolt": { type: "magic", damage: 12, mag_damage: 50, cost: 60 },
  },
};
