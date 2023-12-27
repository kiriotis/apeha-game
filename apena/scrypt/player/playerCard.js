import appendAll from '../helpers/appendAll.js';

export default function playerCard(params, fn) {
  const cardEl = document.createElement('div');
  cardEl.className = 'img_popup_wrapper_pre';
  cardEl.addEventListener('click', () => {
    document.querySelectorAll('.img_popup_wrapper_pre').forEach((el) => {
      el.classList.remove('active');
    });
    cardEl.classList.toggle('active');
    fn(params);
  });
  //
  const imgEl = document.createElement('img');
  imgEl.src = params.img || './assets/main_assets/warrior1.jpg';
  imgEl.className = 'popUp_image';
  //
  const descriptionEl = document.createElement('div');
  descriptionEl.className = 'description';
  //
  const playerTitlePreEl = document.createElement('p');
  playerTitlePreEl.className = 'player_title_pre';
  playerTitlePreEl.innerHTML = params.class;
  //
  const otherEl = document.createElement('div');
  otherEl.className = 'other';
  //
  const playerStatsMainPreEl = document.createElement('div');
  playerStatsMainPreEl.className = 'player_stats_main_pre';
  //
  const playerStatsPreEl = document.createElement('div');
  playerStatsPreEl.className = 'player_stats_pre';
  //
  //
  const playerHpPreEl = document.createElement('p');
  playerHpPreEl.className = 'player_hp_pre';
  playerHpPreEl.innerHTML = `${params.health} HP`;
  //
  const playerMpPreEl = document.createElement('p');
  playerMpPreEl.className = 'player_mp_pre';
  playerMpPreEl.innerHTML = `${params.mana} MP`;
  //
  const playerPDefPreEl = document.createElement('p');
  playerPDefPreEl.className = 'player_p_def_pre';
  playerPDefPreEl.innerHTML = `Physical protection: ${params.physical_def}`;
  //
  const playerMDefPreEl = document.createElement('p');
  playerMDefPreEl.className = 'player_m_def_pre';
  playerMDefPreEl.innerHTML = `Magical protection: ${params.magical_def}`;
  //
  appendAll(cardEl, [
    imgEl,
    appendAll(descriptionEl, [
      appendAll(playerTitlePreEl, []),
      appendAll(otherEl, [
        appendAll(playerStatsMainPreEl, [playerHpPreEl, playerMpPreEl]),
        appendAll(playerStatsPreEl, [playerPDefPreEl, playerMDefPreEl]),
      ]),
    ]),
  ]);
  // console.log(cardEl);
  return cardEl;
}
