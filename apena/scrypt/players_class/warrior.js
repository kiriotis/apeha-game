import { createClass } from "../helpers/createClass.js";
import skillsList from "./skills/skillsList.js";
import playerClasses from "./types/classTypes.js";

//
const warrior = new createClass({
	img: "./assets/main_assets/warrior1.jpg",
	class: playerClasses.warrior,
	health: 120,
	mana: 100,
	physical_def: 10,
	magical_def: 5,
	skills: [skillsList["normalAttack"], skillsList["powerfulAttack"]],
});
//
Object.freeze(warrior);
//
export default warrior;
