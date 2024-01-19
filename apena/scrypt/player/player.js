import { core_battle } from "./../battle/battle.js";
import { player1_stack } from "./../battle/battle.js";
import { player2_stack } from "./../battle/battle.js";
import { popUP_render } from "./popUP.js";

let left_part_skils = document.querySelector(".main_left");
let right_part_skils = document.querySelector(".main_right");
let main_player_image = document.querySelector(".player1_img_main");
let main_player2_image = document.querySelector(".player2_img_main");

////////////////////////////////////////////////////////////////

popUP_render();

/////////////////////////////////////////////////////////////////
export function render_stats(player1_choiseIS, player2_choiseIS) {
  let player1_title = document.querySelector(".player1_title");
  player1_title.innerHTML = player1_choiseIS.class;
  let player_hp = document.querySelector(".player_hp");
  player_hp.innerHTML = `${player1_choiseIS.health}` + " Hp";
  let player_mp = document.querySelector(".player_mp");
  player_mp.innerHTML = `${player1_choiseIS.mana}` + " Mp";

  for (const key in player1_choiseIS.skills) {
    const skill_btn = document.createElement("button");
    // skill_btn.className = key;
    skill_btn.className = "Skill_btn_player1";
    skill_btn.addEventListener("click", () => {
      player1_stack({ ...player1_choiseIS.skills[key], name: key });
    });
    skill_btn.innerHTML = key;
    left_part_skils.appendChild(skill_btn);
  }

  main_player_image.src = player1_choiseIS.img;
  // document
  //   .querySelector("player1_img_main")
  //   .setAttribute("src", `${player1_choiseIS.img}`);
  //////////////
  let player2_title = document.querySelector(".player2_title");
  player2_title.innerHTML = player2_choiseIS.class;
  let player2_hp = document.querySelector(".player2_hp");
  player2_hp.innerHTML = `${player2_choiseIS.health}` + " Hp";
  let player2_mp = document.querySelector(".player2_mp");
  player2_mp.innerHTML = `${player2_choiseIS.mana}` + " Mp";
  for (const key in player2_choiseIS.skills) {
    const skill_btn = document.createElement("button");
    skill_btn.className = "Skill_btn_player2";

    skill_btn.addEventListener("click", () => {
      player2_stack({ ...player2_choiseIS.skills[key], name: key });
    });
    skill_btn.innerHTML = key;
    right_part_skils.appendChild(skill_btn);
  }
  main_player2_image.src = player2_choiseIS.img;
  ////////////////////////
  core_battle(player1_choiseIS, player2_choiseIS);
}
