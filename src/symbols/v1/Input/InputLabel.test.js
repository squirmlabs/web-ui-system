import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../../lib/system/test-utils';
import { FormLabel } from '../Form';
import InputLabel from './InputLabel';

describe('<InputLabel />', () => {
  let shallow;
  let classes;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<InputLabel />);
  });

  it('should render a FormLabel', () => {
    const wrapper = shallow(<InputLabel>Foo</InputLabel>);
    assert.strictEqual(wrapper.type(), FormLabel);
    assert.strictEqual(wrapper.childAt(0).text(), 'Foo');
  });

  it('should have the root and animated classes by default', () => {
    const wrapper = shallow(<InputLabel>Foo</InputLabel>);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass(classes.animated), true);
  });

  it('should not have the animated class when disabled', () => {
    const wrapper = shallow(<InputLabel disableAnimation>Foo</InputLabel>);
    assert.strictEqual(wrapper.hasClass(classes.animated), false);
  });

  it('should have the disabled class when disabled', () => {
    const wrapper = shallow(<InputLabel disabled>Foo</InputLabel>);
    assert.strictEqual(wrapper.hasClass(classes.disabled), true);
  });

  describe('prop: FormControlClasses', () => {
    it('should be able to change the FormLabel style', () => {
      const wrapper = shallow(<InputLabel FormControlClasses={{ foo: 'bar' }}>Foo</InputLabel>);
      assert.strictEqual(wrapper.props().classes.foo, 'bar');
    });
  });

  describe('with uiFormControl context', () => {
    let wrapper;
    let uiFormControl;

    function setFormControlContext(uiFormControlContext) {
      uiFormControl = uiFormControlContext;
      wrapper.setContext({ uiFormControl });
    }

    beforeEach(() => {
      wrapper = shallow(<InputLabel />);
    });

    it('should have the formControl class', () => {
      setFormControlContext({});
      assert.strictEqual(wrapper.hasClass(classes.formControl), true);
    });

    it('should have the labelDense class when margin is dense', () => {
      setFormControlContext({ margin: 'dense' });
      assert.strictEqual(wrapper.hasClass(classes.labelDense), true);
    });

    ['dirty', 'focused'].forEach(state => {
      describe(state, () => {
        beforeEach(() => {
          setFormControlContext({ [state]: true });
        });

        it('should have the shrink class', () => {
          assert.strictEqual(wrapper.hasClass(classes.shrink), true);
        });

        it('should be overridden by the shrink prop', () => {
          assert.strictEqual(wrapper.hasClass(classes.shrink), true);
          wrapper.setProps({ shrink: false });
          assert.strictEqual(wrapper.hasClass(classes.shrink), false);
          wrapper.setProps({ shrink: true });
          assert.strictEqual(wrapper.hasClass(classes.shrink), true);
        });
      });
    });
  });
});
