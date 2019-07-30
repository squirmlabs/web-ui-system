export const concatFlat = (acc, value) => acc.concat(value);

export const flat = array => {
  return array.reduce(concatFlat, []);
};
export const cloneArray = arr => [...arr];

export const hasLength = array => {
  return array.length > 0 && array[0] !== 'undefined';
};
