import getStylesCreator from './getStylesCreator';

describe('getStylesCreator', () => {
  it('create() should work as expected', () => {
    const ret = getStylesCreator({});
    const theme = {
      overrides: {
        blue: {
          height: 20
        }
      }
    };
    const name = 'blue';
    const stylesWithOverrides = ret.create(theme, name);
    expect(stylesWithOverrides).toEqual({ height: {} });
  });
});
