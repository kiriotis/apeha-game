import { allClasses } from "../players_class/allClasses.js";
import { render_stats } from "./player.js";
import { playerCard } from "./playerCard.js";

let popUp = document.querySelector(".popUP_container");
//
let chosen_card = null;
//
let player1_choiceIS;
let player2_choiceIS;

//
document.getElementById("confirm").addEventListener("click", checked_player);
//

function setChoice(cardData) {
	chosen_card = cardData;
}

///////////////////////////////////////////////////////
export function popUP_render(data_card) {
	const container = document.querySelector(".cards__container");
	container.innerHTML = null;
	//
	for (const key in allClasses) {
		container.appendChild(playerCard(allClasses[key], setChoice));
	}
}

///////////////////////////////////////////////////////////

function checked_player() {
	document.querySelectorAll(".img_popup_wrapper_pre").forEach((el) => {
		el.classList.remove("active");
	});
	if (player1_choiceIS == undefined) {
		player1_choiceIS = chosen_card;
	} else {
		player2_choiceIS = chosen_card;
		popUp.classList.add("popUP_Disable");
		render_stats(player1_choiceIS, player2_choiceIS);
	}
}

///////////////////////////////////////////////////////////
// export function chose_class(params) {
// 	player_pick_class = params;

// 	checked_player();
// }
