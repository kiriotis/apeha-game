let player1CheckedTurn = false;
let player2CheckedTurn = false;
//
export function coreBattle() {
  if (player1CheckedTurn && player2CheckedTurn) {
    // console.log('ход окончен');
    player1CheckedTurn = false;
    player2CheckedTurn = false;
  } else {
    // console.log('какой то черт не принял ход');
  }
}

export function player1Stack() {
  // console.log(arguments[0]);
}
export function player2Stack() {}

//
function player1Turn() {
  player1CheckedTurn = true;
  coreBattle();
}
function player2Turn() {
  player2CheckedTurn = true;
  coreBattle();
}

//
document.querySelector('.turn_btn1').addEventListener('click', player1Turn);
document.querySelector('.turn_btn2').addEventListener('click', player2Turn);
