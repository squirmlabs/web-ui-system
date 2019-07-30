export const fontSpec = {
  fontFamily: 'Roboto, proxima-nova, sans-serif',
  fontSize: '14', // px
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightSemiBold: '600',
  fontWeightBold: '600',
  htmlFontSize: '16'
}; // 16px is the default font-size used by browsers on the html element.

export function pxToRem(value) {
  return `${value / fontSpec.htmlFontSize}rem`;
}
