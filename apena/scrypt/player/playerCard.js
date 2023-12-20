import { appendAll } from "../main.js";

export function playerCard(params) {
	const cardEl = document.createElement("div");
	cardEl.className = "img_popup_wrapper_pre";
	//
	const imgEl = document.createElement("img");
	imgEl.src = params.img || "./assets/main_assets/warrior1.jpg";
	imgEl.className = "popUp_image";
	//
	const descriptionEl = document.createElement("div");
	descriptionEl.className = "description";
	//
	const player_title_preEl = document.createElement("p");
	player_title_preEl.className = "player_title_pre";
	player_title_preEl.innerHTML = params.class;
	//
	const otherEl = document.createElement("div");
	otherEl.className = "other";
	//
	const player_stats_main_preEl = document.createElement("div");
	player_stats_main_preEl.className = "player_stats_main_pre";
	//
	const player_stats_preEl = document.createElement("div");
	player_stats_preEl.className = "player_stats_pre";
	//
	//
	const player_hp_preEl = document.createElement("p");
	player_hp_preEl.className = "player_hp_pre";
	player_hp_preEl.innerHTML = params.health + " HP";
	//
	const player_mp_preEl = document.createElement("p");
	player_mp_preEl.className = "player_mp_pre";
	player_mp_preEl.innerHTML = params.mana + " MP";
	//
	const player_p_def_preEl = document.createElement("p");
	player_p_def_preEl.className = "player_p_def_pre";
	player_p_def_preEl.innerHTML =
		"Physical protection: " + params.physical_def;
	//
	const player_m_def_preEl = document.createElement("p");
	player_m_def_preEl.className = "player_m_def_pre";
	player_m_def_preEl.innerHTML = "Magical protection: " + params.magical_def;
	//
	appendAll(cardEl, [
		imgEl,
		appendAll(descriptionEl, [
			appendAll(player_title_preEl, []),
			appendAll(otherEl, [
				appendAll(player_stats_main_preEl, [
					player_hp_preEl,
					player_mp_preEl,
				]),
				appendAll(player_stats_preEl, [
					player_p_def_preEl,
					player_m_def_preEl,
				]),
			]),
		]),
	]);
	// console.log(cardEl);
	return cardEl;
}
