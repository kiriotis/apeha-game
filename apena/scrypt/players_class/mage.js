export const mage = {
  img: "./assets/main_assets/warrior2.jpg",
  class: "Mage",
  health: 75,
  mana: 125,
  physical_def: 5,
  magical_def: 10,
  skills: {
    fire_ball: { type: "magic",  mag_damage: 10, cost: 10 },
    earth_ball: { type: "combine", damage: 12, mag_damage: 12, cost: 10 },
    light_bolt: { type: "magic", damage: 12, mag_damage: 50, cost: 60 },
  },
};
