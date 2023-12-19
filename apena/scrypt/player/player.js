
import { popUP_render } from "./popUP.js";
import { core_battle } from "./../battle/battle.js";

////////////////////////////////////////////////////////////////

popUP_render();

/////////////////////////////////////////////////////////////////
export function render_stats(player1_choiseIS, player2_choiseIS) {
	console.log(player1_choiseIS);

	let player1_title = document.querySelector(".player1_title");
	player1_title.innerHTML = player1_choiseIS.class;
	let player_hp = document.querySelector(".player_hp");
	player_hp.innerHTML = `${player1_choiseIS.health}` + " Hp";
	let player_mp = document.querySelector(".player_mp");
	player_mp.innerHTML = `${player1_choiseIS.mana}` + " Mp";

	//////////////
	let player2_title = document.querySelector(".player2_title");
	player2_title.innerHTML = player2_choiseIS.class;
	let player2_hp = document.querySelector(".player2_hp");
	player2_hp.innerHTML = `${player2_choiseIS.health}` + " Hp";
	let player2_mp = document.querySelector(".player2_mp");
    player2_mp.innerHTML = `${player2_choiseIS.mana}` + " Mp";
    ////////////////////////
    core_battle(player1_choiseIS,player2_choiseIS);


}
