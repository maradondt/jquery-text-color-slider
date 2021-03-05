import $ from 'jquery';
import initSlider from './initSlider';
import setColorState from './setColorState';
import watch from './view/index';

// Model
const elements = {
  textButton: $('#text-button'),
  backgroundButton: $('#background-button'),
  inputs: [$('#red'), $('#green'), $('#blue')],
  textArea: $('#text'),
};

const state = {
  activeButton: '',

  sliders: {
    text: {
      red: 100,
      green: 50,
      blue: 50,
    },
    background: {
      red: 240,
      green: 240,
      blue: 240,
    },
  },
};

const init = () => {
  const watchedState = watch(state, elements);
  const { textButton, backgroundButton, inputs } = elements;

  // Controllers
  initSlider(watchedState, elements, 'text');
  textButton.on('click', () => {
    watchedState.activeButton = 'text';
  });
  backgroundButton.on('click', () => {
    watchedState.activeButton = 'background';
  });

  $(inputs).slider({
    change: (e, ui) => {
      const { color } = e.target.dataset;
      setColorState(watchedState, ui, color);
    },
  });
};

export default init;
