import CreateClass from '../helpers/createClass.js';
import skillsList from './skills/skillsList.js';
import playerClasses from './types/classTypes.js';

//
const mage = new CreateClass({
  img: './assets/main_assets/warrior2.jpg',
  class: playerClasses.wizard,
  health: 75,
  mana: 125,
  physical_def: 5,
  magical_def: 10,
  skills: [skillsList.fire_ball],
});
//
Object.freeze(mage);
//
export default mage;
