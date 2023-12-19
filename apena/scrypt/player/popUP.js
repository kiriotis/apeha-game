import { warrior } from "./../players_class/warrior.js";
import { mage } from "./../players_class/mage.js";
document.getElementById("warrior").addEventListener("click", () => {
	popUP_render(warrior);
});
document.getElementById("mage").addEventListener("click", () => {
	popUP_render(mage);
});
var data_card = warrior;

export function popUP_render(data_card) {


	let popUPimg = document.querySelector(".popUp_image");
	// popUPimg.setAttribute("src", `${data_card.image}`);

	let player_title_pre = document.querySelector(".player_title_pre");
	player_title_pre.innerHTML = data_card.class;

	let player_hp_pre = document.querySelector(".player_hp_pre");
	player_hp_pre.innerHTML = `${data_card.health}` + " Hp";
	let player_mp_pre = document.querySelector(".player_mp_pre");
	player_mp_pre.innerHTML = `${data_card.mana}` + " Mp";

	let player_p_def_pre = document.querySelector(".player_p_def_pre");
	player_p_def_pre.innerHTML = "Physical protection: " + `${data_card.physical_def}`;
	let player_m_def_pre = document.querySelector(".player_m_def_pre");
	player_m_def_pre.innerHTML = "Magical protection: " + `${data_card.magical_def}`;
}
