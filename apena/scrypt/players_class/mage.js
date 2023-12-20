export const mage = {
	img: "./assets/main_assets/warrior2.jpg",
	class: "Mage",
	health: 75,
	mana: 125,
	physical_def: 5,
	magical_def: 10,
	skills: {
		fire_ball: { type: "magic", damage: 10 },
		earth_ball: { type: "combine", damage: 10, mag_damge: 10, },
	},
};
