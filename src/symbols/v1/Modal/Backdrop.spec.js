import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../../lib/system/test-utils';
import Backdrop from './Backdrop';

describe('<Backdrop />', () => {
  let shallow;
  let classes;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<Backdrop open />);
  });

  it('should render a backdrop div', () => {
    const wrapper = shallow(<Backdrop open className="woofBackdrop" />);
    assert.strictEqual(wrapper.hasClass('woofBackdrop'), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.root), true);
  });
});
