export function hexToRGB(hex, alpha = 1) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')}, ${alpha})`;
  }
  throw new Error('Bad Hex');
}

// function hexToRGB(hex, alpha = 1) {
//   let r = parseInt(hex.slice(1, 3), 16),
//     g = parseInt(hex.slice(3, 5), 16),
//     b = parseInt(hex.slice(5, 7), 16);

//   if (alpha) {
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
//   }
//   return `rgb(${r}, ${g}, ${b})`;
// }
