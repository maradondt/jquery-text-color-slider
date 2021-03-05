export default function setActiveButton(elements, activeButton) {
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
