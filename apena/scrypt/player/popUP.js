import { allClasses } from "../players_class/allClasses.js";
import { render_stats } from "./player.js";
import { playerCard } from "./playerCard.js";
import { chosen_card } from "./playerCard.js";

let popUp = document.querySelector(".popUP_container");
let player1_choiseIS;
let player2_choiseIS;

//
document.getElementById("confirm").addEventListener("click", checked_player);
// let player_pick_class;

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
	document.querySelectorAll(".img_popup_wrapper_pre").forEach((el) => {
		el.classList.remove("active");
	});
	if (player1_choiseIS == undefined) {
		player1_choiseIS = chosen_card;
		console.log(player1_choiseIS);
	} else {
		player2_choiseIS = chosen_card;
		popUp.classList.add("popUP_Disable");
		render_stats(player1_choiseIS, player2_choiseIS);
	}
}

///////////////////////////////////////////////////////////
// export function chose_class(params) {
// 	player_pick_class = params;

// 	checked_player();
// }
