import { warrior } from "./../players_class/warrior.js";
import { mage } from "./../players_class/mage.js";

// const kek = { name: "kek", age: 123 };

// let copy = { ...kek };
// copy.name = "lol";
// console.log(copy);
// console.log(kek);

let player1_curent_stats;
let player2_curent_stats;
document.querySelector(".turn_btn1").addEventListener("click", player1_turn);
document.querySelector(".turn_btn2").addEventListener("click", player2_turn);
let player1_checkedTurn = false;
let player2_checkedTurn = false;

function player1_turn() {
	player1_checkedTurn = true;
	core_battle();
}
function player2_turn() {
	player2_checkedTurn = true;
	core_battle();
}

export function core_battle() {

	player1_curent_stats = { ...arguments[0] };
	player2_curent_stats = { ...arguments[1] };
	if (player1_checkedTurn && player2_checkedTurn) {
		console.log("ход окончен");
		player1_checkedTurn = false;
		player2_checkedTurn = false;
	} else {
		console.log("какой то черт не принял ход");
	}
	console.log(player1_curent_stats, player2_curent_stats);
}

export function player1_stack() {
	console.log(arguments[0]);
}
export function player2_stack() {}
