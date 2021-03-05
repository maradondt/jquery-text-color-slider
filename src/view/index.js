import 'jquery-ui-dist/jquery-ui';
import onChange from 'on-change';
import refreshTarget from './refreshTarget';
import setActiveButton from './setActiveButton';
import renderColorValue from './renderColorValue';

const dispatchProp = {
  text: 'color',
  background: 'background-color',
};

const watch = (state, elements) =>
  onChange(state, (path, value) => {
    switch (path) {
      case 'activeButton':
        setActiveButton(elements, value);
        renderColorValue(state, elements, value);
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
