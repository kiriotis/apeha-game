import damageTypes from "../types/damageTypes.js";

const skillsList = {
	"normalAttack": {
		name: "Normal Attack",
		type: damageTypes.normal,
		damage: 10,
	},
	powerfulAttack: {
		name: "Powerful Attack",
		type: damageTypes.normal,
		damage: 20,
	},
	fire_ball: {
		name: "Fireball",
		type: damageTypes.magic,
		damage: 10,
	},
};
//
Object.freeze(skillsList);
//
export default skillsList;


