import $ from 'jquery';

export default function initSlider(state, elements, initSlider) {
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
