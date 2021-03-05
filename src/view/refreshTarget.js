import $ from 'jquery';
import hexFromRGB from './hexFromRGB';

export default function refreshTarget({ red, green, blue }, property, target) {
  const hex = hexFromRGB(red, green, blue);
  $(target).css(property, '#' + hex);
};
