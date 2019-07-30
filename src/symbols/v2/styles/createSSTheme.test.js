import { assert } from 'chai';
import createSSTheme from './createSSTheme';
import { deepOrange, green } from '../colors';

describe('createSSTheme', () => {
  it('should have a palette', () => {
    const ssTheme = createSSTheme();
    assert.strictEqual(typeof createSSTheme, 'function');
    assert.strictEqual(typeof ssTheme.palette, 'object');
  });

  it('should have the custom palette', () => {
    const ssTheme = createSSTheme({
      palette: { primary: { main: deepOrange[500] }, secondary: { main: green.A400 } },
    });
    assert.strictEqual(ssTheme.palette.primary.main, deepOrange[500]);
    assert.strictEqual(ssTheme.palette.secondary.main, green.A400);
  });

  it('should allow providing a partial structure', () => {
    const ssTheme = createSSTheme({ transitions: { duration: { shortest: 150 } } });
    assert.notStrictEqual(ssTheme.transitions.duration.shorter, undefined);
  });

  describe('shadows', () => {
    it('should provide the default array', () => {
      const ssTheme = createSSTheme();
      assert.strictEqual(
        ssTheme.shadows[2],
        '0px 1px 5px 0px rgba(0, 0, 0, 0.2),' +
          '0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      );
    });

    it('should override the array as expected', () => {
      const shadows = [
        'none',
        1,
        1,
        1,
        2,
        3,
        3,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        7,
        8,
        8,
        8,
        9,
        9,
        10,
        10,
        10,
        11,
        11,
      ];
      const ssTheme = createSSTheme({ shadows });
      assert.strictEqual(ssTheme.shadows, shadows);
    });
  });

  describe('props', () => {
    it('should have the props as expected', () => {
      const props = {
        SSDialog: {
          fullScreen: true,
          fullWidth: false,
        },
        SSButtonBase: {
          disableRipple: true,
        },
        SSPopover: {
          container: document.createElement('div'),
        },
      };
      const ssTheme = createSSTheme({ props });
      assert.deepEqual(ssTheme.props, props);
    });
  });
});
