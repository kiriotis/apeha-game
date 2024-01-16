// const kek = { name: "kek", age: 123 };

// let copy = { ...kek };
// copy.name = "lol";
// console.log(copy);
// console.log(kek);

let player1_curent_stats;
let player2_curent_stats;
document.querySelector(".turn_btn1").addEventListener("click", player1_turn);
document.querySelector(".turn_btn2").addEventListener("click", player2_turn);

////////////////////////////////
let player1_checkedTurn = false;
let player2_checkedTurn = false;

////////////////////////////
function player1_turn() {
  let turnbtn = document.querySelectorAll(".Skill_btn_player1");

  if (turnbtn[0].classList.contains("disabled")) {
    player1_checkedTurn = true;
    document.querySelector(".turn_btn1").setAttribute("disabled", "");
    core_battle();
  } else {
    console.log("cto po skilly");
  }
}
function player2_turn() {
  let turnbtn = document.querySelectorAll(".Skill_btn_player2");
  if (turnbtn[0].classList.contains("disabled")) {
    player2_checkedTurn = true;
    document.querySelector(".turn_btn2").setAttribute("disabled", "");
    core_battle();
  } else {
    console.log("cto po skilly");
  }
}
//////////////////////////
let player1_stack_;
let player2_stack_;
///////////////////////////
export function core_battle() {
  if (player1_curent_stats == null) {
    player1_curent_stats = { ...arguments[0] };
  }
  if (player2_curent_stats == null) {
    player2_curent_stats = { ...arguments[1] };
  }

  if (player1_checkedTurn && player2_checkedTurn) {
    core_calc();
    console.log("ход окончен");
    next_turn();
  } else {
    console.log("какой то черт не принял ход");
  }
}
////////////////////////////
export function player1_stack(skill) {
  if (skill.cost <= player1_curent_stats.mana) {
    document.querySelectorAll(".Skill_btn_player1").forEach((el) => {
      el.setAttribute("disabled", "");
      el.classList.add("disabled");
    });
    player1_stack_ = {
      mag_damage: skill.mag_damage || 0,
      damage: skill.damage || 0,
      type: skill.type,
      cost: skill.cost,
    };
  } else {
    console.log("out of mana");
  }
}
export function player2_stack(skill) {
  if (skill.cost <= player2_curent_stats.mana) {
    document.querySelectorAll(".Skill_btn_player2").forEach((el) => {
      el.setAttribute("disabled", "");
      el.classList.add("disabled");
    });
    player2_stack_ = {
      mag_damage: skill.mag_damage || 0,
      damage: skill.damage || 0,
      type: skill.type,
      cost: skill.cost,
    };
  } else {
    console.log("out of mana");
  }
}
////////////////////////////

function core_calc() {
  let physic_delta;
  let magic_delta;
  ////////////////////////////////////

  if (player2_stack_.damage - player1_curent_stats.physical_def > 0) {
    physic_delta = player2_stack_.damage - player1_curent_stats.physical_def;
  } else {
    physic_delta = 0;
  }

  if (player2_stack_.mag_damage - player1_curent_stats.magical_def > 0) {
    magic_delta = player2_stack_.mag_damage - player1_curent_stats.magical_def;
  } else {
    magic_delta = 0;
  }

  player1_curent_stats.health -= physic_delta + magic_delta;

  console.log(player1_curent_stats.health);
  player1_curent_stats.mana = player1_curent_stats.mana - player1_stack_.cost;

  /////////////////////////////////////

  physic_delta = 0;
  magic_delta = 0;

  if (player1_stack_.damage - player2_curent_stats.physical_def > 0) {
    physic_delta = player1_stack_.damage - player2_curent_stats.physical_def;
  } else {
    physic_delta = 0;
  }

  if (player1_stack_.mag_damage - player2_curent_stats.magical_def > 0) {
    magic_delta = player1_stack_.mag_damage - player2_curent_stats.magical_def;
  } else {
    magic_delta = 0;
  }

  player2_curent_stats.health -= physic_delta + magic_delta;

  console.log(player2_curent_stats.health);
  player2_curent_stats.mana = player2_curent_stats.mana - player2_stack_.cost;
}
////////////////////////////

function next_turn() {
  player1_checkedTurn = false;
  player2_checkedTurn = false;
  player1_stack_ = null;
  player2_stack_ = null;
  document.querySelector(".turn_btn1").removeAttribute("disabled", "");
  document.querySelector(".turn_btn2").removeAttribute("disabled", "");

  document.querySelectorAll(".Skill_btn_player1").forEach((el) => {
    el.removeAttribute("disabled", "");
    el.classList.remove("disabled");
  });
  document.querySelectorAll(".Skill_btn_player2").forEach((el) => {
    el.removeAttribute("disabled", "");
    el.classList.remove("disabled");
  });
  //////////////////////////////////////
  document.querySelector(".player_hp").innerHTML =
    player1_curent_stats.health + " Hp";
  document.querySelector(".player_mp").innerHTML =
    player1_curent_stats.mana + " Mp";
  document.querySelector(".player2_hp").innerHTML =
    player2_curent_stats.health + " Hp";
  document.querySelector(".player2_mp").innerHTML =
    player2_curent_stats.mana + " Mp";
}
