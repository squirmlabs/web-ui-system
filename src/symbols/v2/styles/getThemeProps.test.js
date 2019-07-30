import { assert } from 'chai';
import getThemeProps from './getThemeProps';

describe('getThemeProps', () => {
  it('should ignore empty theme', () => {
    const props = getThemeProps({
      theme: {},
      name: 'SSFoo',
      props: {},
    });
    assert.deepEqual(props, {});
  });

  it('should ignore different component', () => {
    const props = getThemeProps({
      theme: {
        props: {
          SSBar: {
            disableRipple: true,
          },
        },
      },
      name: 'SSFoo',
      props: {},
    });
    assert.deepEqual(props, {});
  });

  it('should return the properties', () => {
    const props = getThemeProps({
      theme: {
        props: {
          SSFoo: {
            disableRipple: true,
          },
        },
      },
      name: 'SSFoo',
      props: {},
    });
    assert.deepEqual(props, {
      disableRipple: true,
    });
  });
});
