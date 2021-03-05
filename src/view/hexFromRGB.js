export default (r, g, b) => {
  const hex = [r.toString(16), g.toString(16), b.toString(16)];

  return hex.map((val) => val.length === 1
    ? `0${val}`
    : val
  ).join('').toUpperCase();
};
