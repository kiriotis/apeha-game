import { coreBattle } from '../battle/battle.js';
import allClasses from '../players_class/allClasses.js';
import playerCard from './playerCard.js';

const popUp = document.querySelector('.popUP_container');
//
let chosenCard = null;
//
// контейнер с выбором
let player1ChoiceIS;
let player2ChoiceIS;

//
// кнопка подтверждения
const confirmBtn = document.getElementById('confirm');
// по умолчанию выключена
confirmBtn.disabled = true;
//
// показывает кто сейчас выбирает класс
const whoSelect = document.querySelector('.whoSelect');
whoSelect.innerHTML = 'player 1';

function renderStats() {
  if (!player1ChoiceIS || !player2ChoiceIS) {
    // рендер отменяется если ни один из выборов не сделан
    return;
  }
  //
  // выборы объединяются в общий массив
  const playersChoice = [player1ChoiceIS, player2ChoiceIS];
  //
  // запись данных на основе выбора класса через перебор массива
  // данные подставляются по индексу
  playersChoice.forEach((player, index) => {
    //
    // запись названия класса
    const title = document.querySelector(`.player_${index + 1}_title`);
    title.innerHTML = player.class;
    // запись картинки
    const img = document.querySelector(`.player_${index + 1}_img_wrapper>img`);
    img.src = player.img;
    // запись HP
    const hp = document.querySelector(`.player_${index + 1}_hp`);
    hp.innerHTML = `${player.health} Hp`;
    // запись MP
    const mp = document.querySelector(`.player_${index + 1}_mp`);
    mp.innerHTML = `${player.mana} Mp`;
    //
    const skillButtonContainer = document.querySelector(
      `.player_${index + 1}_skills`
    );
    //
    player.skills.forEach((skill) => {
      const skillBtn = document.createElement('button');
      //
      skillBtn.className = skill.name;
      skillBtn.innerHTML = skill.name;
      skillBtn.addEventListener('click', () => {
        // player1Stack(skill);
      });
      skillButtonContainer.appendChild(skillBtn);
    });
  });
  //
  // вызов механики боя с передачей туда выбранных классов
  coreBattle(player1ChoiceIS, player2ChoiceIS);
}

//
// изменяет состояние выбранной карты в меню выбора
function setChoice(cardData) {
  chosenCard = cardData;
  confirmBtn.disabled = false;
}

/// ////////////////////////////////////////////////////
export default function popUPRender() {
  const container = document.querySelector('.cards__container');
  container.innerHTML = null;
  //
  Object.keys(allClasses).forEach((key) => {
    container.appendChild(playerCard(allClasses[key], setChoice));
  });
}

/// ////////////////////////////////////////////////////////

function checkedPlayer() {
  confirmBtn.disabled = true;
  //
  document.querySelectorAll('.img_popup_wrapper_pre').forEach((el) => {
    el.classList.remove('active');
  });
  if (player1ChoiceIS === undefined) {
    player1ChoiceIS = chosenCard;
    //
    // анимация
    popUp.style.opacity = '0%';
    setTimeout(() => {
      popUp.style.opacity = '100%';
    }, 150);
  } else {
    player2ChoiceIS = chosenCard;
    //
    // анимация
    popUp.style.opacity = '0%';
    setTimeout(() => {
      popUp.classList.add('popUP_Disable');
    }, 150);
    renderStats(player1ChoiceIS, player2ChoiceIS);
  }
  //
  // меняет того. кто выбирает
  if (player1ChoiceIS) {
    setTimeout(() => {
      whoSelect.innerHTML = 'player 2';
    }, 150);
  } else {
    whoSelect.innerHTML = 'player 1';
  }
}

/// ////////////////////////////////////////////////////////
// export function chose_class(params) {
// 	player_pick_class = params;

// 	checked_player();
// }

// назначение ивента
confirmBtn.addEventListener('click', checkedPlayer);
