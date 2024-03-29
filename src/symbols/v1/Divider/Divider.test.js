// @flow

import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '@symbols/core/test-utils';
import Divider from './Divider';

describe('<Divider />', () => {
  let shallow;
  let classes;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<Divider />);
  });

  it('should render a hr', () => {
    const wrapper = shallow(<Divider />);
    assert.strictEqual(wrapper.name(), 'hr');
  });

  it('should render with the root and default class', () => {
    const wrapper = shallow(<Divider />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass(classes.default), true, 'should have the default class');
  });

  it('should set the absolute class', () => {
    const wrapper = shallow(<Divider absolute />);
    assert.strictEqual(wrapper.hasClass(classes.absolute), true, 'should be absolute');
  });

  it('should set the inset class', () => {
    const wrapper = shallow(<Divider inset />);
    assert.strictEqual(wrapper.hasClass(classes.inset), true, 'should have inset class');
  });

  it('should set the light class', () => {
    const wrapper = shallow(<Divider light />);
    assert.strictEqual(wrapper.hasClass(classes.light), true, 'should have light class');
  });
});
