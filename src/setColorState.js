export default function setColorState(state, { value }, color) {
  const { activeButton } = state;
  const activeSliderState = state.sliders[activeButton];
  // changed active slider color value
  state.sliders[activeButton] = {
    ...activeSliderState,
    [color]: Number(value),
  };
};
