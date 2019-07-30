import React from 'react';
import { mount } from 'enzyme';
import withStyles from './index';

describe('withStyles', () => {
  it('render() should handle classesProp', () => {
    function MyComponent() {
      return null;
    }

    const Wrapped = withStyles(() => ({}), {})(MyComponent);
    mount(
      <Wrapped
        classes={{
          someKey: 'someValue'
        }}
      />
    );
    expect(Object.getPrototypeOf(Wrapped)).toEqual(React.Component);
  });
});
