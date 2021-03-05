// @ts-check
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import onChange from 'on-change';
import hexFromRGB from './hexFromRGB';

const setColorValue = (state, elements, currentSlider) => {
  const { inputs } = elements;
  const values = state.sliders[currentSlider];

  inputs.forEach((input) => {
    const { color } = input.data();
    input.slider('value', values[color]);
  });
};

const refreshTarget = ({ red, green, blue }, property, target) => {
  const hex = hexFromRGB(red, green, blue);
  $(target).css(property, '#' + hex);
};

const setActiveButton = (elements, activeButton) => {
  const { textButton, backgroundButton } = elements;
  switch (activeButton) {
    case 'text':
      backgroundButton.removeClass('ui-state-active');
      textButton.addClass('ui-state-active');
      break;
    case 'background':
      textButton.removeClass('ui-state-active');
      backgroundButton.addClass('ui-state-active');
      break;
    default:
      break;
  }
};

const dispatchProp = {
  text: 'color',
  background: 'background-color',
};

const watch = (state, elements) =>
  onChange(state, (path, value) => {
    switch (path) {
      case 'activeButton':
        setActiveButton(elements, value);
        setColorValue(state, elements, value);
        break;
      case 'sliders.text':
        refreshTarget(value, 'color', elements.textArea);
        break;
      case 'sliders.background':
        refreshTarget(value, 'background-color', elements.textArea);
        break;
      case 'sliders':
        Object.keys(value).forEach((slider) => {
          const currentColorValues = state.sliders[slider];
          const currentProp = dispatchProp[slider];
          refreshTarget(
            currentColorValues,
            currentProp,
            elements.textArea
          );
        });

        break;
      default:
        console.warn('Unknow state');
        break;
    }
  });

export default watch;
