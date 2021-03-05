import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import watch from './view/index';

const elements = {
  textButton: $('#text-button'),
  backgroundButton: $('#background-button'),
  inputs: [$('#red'), $('#green'), $('#blue')],
  textArea: $('#text'),
};

const setColorState = (state, { value }, color) => {
  const { activeButton } = state;
  const activeSliderState = state.sliders[activeButton];
  // changed active slider color value
  state.sliders[activeButton] = {
    ...activeSliderState,
    [color]: Number(value),
  };
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

const initSlider = (state, elements, initSlider) => {
  const { sliders } = state;

  $(elements.inputs).slider({
    orientation: 'horizontal',
    range: 'min',
    max: 255,
  });

  // init slider state for refresh colors
  state.activeButton = initSlider;
  state.sliders = {
    ...sliders,
  };
};

const init = () => {
  const watchedState = watch(state, elements);
  const { textButton, backgroundButton, inputs } = elements;

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
