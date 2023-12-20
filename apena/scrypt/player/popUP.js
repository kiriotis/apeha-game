import { allClasses } from "../players_class/allClasses.js";
import { render_stats } from "./player.js";
import { playerCard } from "./playerCard.js";

let popUp = document.querySelector(".popUP_container");
let player1_choiseIS;
let player2_choiseIS;

//
document.getElementById("confirm").addEventListener("click", checked_player);
let player_pick_class;

///////////////////////////////////////////////////////
export function popUP_render(data_card) {
	const container = document.querySelector(".cards__container");
	container.innerHTML = null;
	//
	for (const key in allClasses) {
		// const btn = document.createElement("button");
		// btn.className = "class_selector_btn";
		// btn.innerHTML = allClasses[key].class;
		// btn.id = allClasses[key].class;
		// btn.addEventListener("click", () => {
		// 	popUP_render(allClasses[key]);
		// });
		// //
		// buttonsContainer.appendChild(btn);

		container.appendChild(playerCard(allClasses[key]));
	}
}

///////////////////////////////////////////////////////////

function checked_player() {
	if (player1_choiseIS == undefined) {
		player1_choiseIS = player_pick_class;
	} else {
		player2_choiseIS = player_pick_class;
		popUp.classList.add("popUP_Disable");
		render_stats(player1_choiseIS, player2_choiseIS);
	}
}
