export default function renderColorValue(state, elements, currentSlider) {
  const { inputs } = elements;
  const values = state.sliders[currentSlider];

  inputs.forEach((input) => {
    const { color } = input.data();
    input.slider('value', values[color]);
  });
};
