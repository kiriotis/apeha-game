import { allClasses } from "../players_class/allClasses.js";
import { render_stats } from "./player.js";
import { playerCard } from "./playerCard.js";

let popUp = document.querySelector(".popUP_container");
//
let chosen_card = null;
//
// контейнер с выбором
let player1_choiceIS;
let player2_choiceIS;

//
// кнопка подтверждения
const confirmBtn = document.getElementById("confirm");
confirmBtn.addEventListener("click", checked_player);
// по умолчанию выключена
confirmBtn.disabled = true;
//
// показывает кто сейчас выбирает класс
const whoSelect = document.querySelector(".whoSelect");
whoSelect.innerHTML = "player 1";

//
// изменяет состояние выбранной карты в меню выбора
function setChoice(cardData) {
	chosen_card = cardData;
	confirmBtn.disabled = false;
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
	confirmBtn.disabled = true;
	//
	document.querySelectorAll(".img_popup_wrapper_pre").forEach((el) => {
		el.classList.remove("active");
	});
	if (player1_choiceIS == undefined) {
		player1_choiceIS = chosen_card;
		//
		// анимация
		popUp.style.opacity = "0%";
		setTimeout(() => {
			popUp.style.opacity = "100%";
		}, 150);
	} else {
		player2_choiceIS = chosen_card;
		//
		// анимация
		popUp.style.opacity = "0%";
		setTimeout(() => {
			popUp.classList.add("popUP_Disable");
		}, 150);
		render_stats(player1_choiceIS, player2_choiceIS);
	}
	//
	// меняет того. кто выбирает
	if (player1_choiceIS) {
		setTimeout(() => {
			whoSelect.innerHTML = "player 2";
		}, 150);
	} else {
		whoSelect.innerHTML = "player 1";
	}
}

///////////////////////////////////////////////////////////
// export function chose_class(params) {
// 	player_pick_class = params;

// 	checked_player();
// }
