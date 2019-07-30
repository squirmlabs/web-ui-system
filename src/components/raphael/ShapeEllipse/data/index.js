import { Raphael } from 'react-raphael';

export const data = [
  {
    x: 50,
    y: 50,
    r: 40,
    attr: { stroke: '#0b8ac9', 'stroke-width': 5 },
    animate: Raphael.animation({ cx: 60 }, 500, '<>')
  },
  {
    x: 100,
    y: 100,
    r: 40,
    attr: { stroke: '#f0c620', 'stroke-width': 5 },
    animate: Raphael.animation({ cx: 105 }, 500, '<>')
  },
  {
    x: 150,
    y: 50,
    r: 40,
    attr: { stroke: '#1a1a1a', 'stroke-width': 5 }
  },
  {
    x: 200,
    y: 100,
    r: 40,
    attr: { stroke: '#10a54a', 'stroke-width': 5 },
    animate: Raphael.animation({ cx: 195 }, 500, '<>')
  },
  {
    x: 250,
    y: 50,
    r: 40,
    attr: { stroke: '#e11032', 'stroke-width': 5 },
    animate: Raphael.animation({ cx: 240 }, 500, '<>')
  }
];

export const paper = {
  width: 960,
  height: 540
};

export const rectangle = {
  x: 30,
  y: 48,
  width: 240,
  height: 150,
  attr: { fill: '#10a54a', stroke: '#f0c620', 'stroke-width': 5 }
};

export const ellipse = {
  x: 150,
  y: 198,
  ry: 40,
  rx: 100,
  attr: { fill: '#fff', stroke: '#e11032' },
  glow: {
    width: 10,
    fill: true,
    color: '#0b8ac9',
    opacity: 1
  }
};
export const text = {
  x: 150,
  y: 258,
  text: 'Text Example 1',
  attr: { fill: '#fff' }
};
export const path = {
  d: ['M150 287L150 287'],
  animate: Raphael.animation({ path: ['M80 287L220 287'] }, 500, '<>'),
  attr: { stroke: '#fff' }
};
export const line = {
  x1: 150,
  y1: 290,
  x2: 150,
  y2: 290,
  animate: Raphael.animation({ x1: 80, x2: 220 }, 500, '<>'),
  attr: { stroke: '#fff' }
};
