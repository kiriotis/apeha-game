export const warrior = {
  img: "./assets/main_assets/warrior_main.png",
  class: "Warrior",
  health: 100,
  mana: 100,
  physical_def: 10,
  magical_def: 5,
  skills: {
    "Normal Attack": {
      type: "normal",
      damage: 12,
      cost: 0,
    },
    "Powerful attack": {
      type: "normal",
      damage: 20,
      cost: 12,
    },
    "Mega powerful attack": {
      type: "normal",
      damage: 50,
      cost: 12,
    },
  },
};
