import { lighten, darken, emphasize } from './colorManipulator';

describe('colorManipulator', () => {
  it('lighten() should work properly', () => {
    const color = '#123456';
    const ret = lighten(color, 0.5);
    expect(ret).toEqual('rgb(136, 153, 170)');
  });

  it('darken() should work properly', () => {
    const color = '#123456';
    const ret = darken(color, 0.5);
    expect(ret).toEqual('rgb(9, 26, 43)');
  });

  it('emphasize() should work properly', () => {
    const color = '#123456';
    const ret = emphasize(color, 0.5);
    expect(ret).toEqual('rgb(136, 153, 170)');
  });
});
