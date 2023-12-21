let player1_current_stats;
let player2_current_stats;
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
	player1_current_stats = { ...arguments[0] };
	player2_current_stats = { ...arguments[1] };
	if (player1_checkedTurn && player2_checkedTurn) {
		console.log("ход окончен");
		player1_checkedTurn = false;
		player2_checkedTurn = false;
	} else {
		console.log("какой то черт не принял ход");
	}
	console.log(player1_current_stats, player2_current_stats);
}

export function player1_stack() {
	console.log(arguments[0]);
}
export function player2_stack() {}
