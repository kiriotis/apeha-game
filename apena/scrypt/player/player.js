import { core_battle, player1_stack } from "./../battle/battle.js";
import { popUP_render } from "./popUP.js";

////////////////////////////////////////////////////////////////

// первичный рендер
popUP_render();

/////////////////////////////////////////////////////////////////
// рендер данных о выбранных классах
export function render_stats(player1_choiceIS, player2_choiceIS) {
	if (!player1_choiceIS | !player2_choiceIS) {
		// рендер отменяется если ни один из выборов не сделан
		return;
	}
	//
	// выборы объединяются в общий массив
	const playersChoice = [player1_choiceIS, player2_choiceIS];
	//
	// запись данных на основе выбора класса через перебор массива
	// данные подставляются по индексу
	playersChoice.forEach((player, index) => {
		//
		// запись названия класса
		const title = document.querySelector(`.player_${index + 1}_title`);
		title.innerHTML = player.class;
		// запись картинки
		const img = document.querySelector(
			`.player_${index + 1}_img_wrapper>img`
		);
		img.src = player.img;
		// запись HP
		const hp = document.querySelector(`.player_${index + 1}_hp`);
		hp.innerHTML = `${player.health}` + " Hp";
		// запись MP
		const mp = document.querySelector(`.player_${index + 1}_mp`);
		mp.innerHTML = `${player.mana}` + " Mp";
		//
		let skillButtonContainer = document.querySelector(
			`.player_${index + 1}_skills`
		);
		//
		player.skills.forEach((skill) => {
			const skill_btn = document.createElement("button");
			//
			skill_btn.className = skill.name;
			skill_btn.innerHTML = skill.name;
			skill_btn.addEventListener("click", () => {
				player1_stack(skill);
			});
			skillButtonContainer.appendChild(skill_btn);
		});
	});
	//
	// вызов механики боя с передачей туда выбранных классов
	core_battle(player1_choiceIS, player2_choiceIS);
}
