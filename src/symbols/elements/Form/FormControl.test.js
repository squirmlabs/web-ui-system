import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../../lib/system/test-utils';
import Input from '../Input';
import FormControl from './FormControl';

describe('<FormControl />', () => {
  let shallow;
  let classes;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<FormControl />);
  });

  describe('initial state', () => {
    it('should render a div with the root and user classes', () => {
      const wrapper = shallow(<FormControl className="woofFormControl" />);

      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      assert.strictEqual(wrapper.hasClass('woofFormControl'), true);
    });

    it('should have the focused class', () => {
      const wrapper = shallow(<FormControl className="woofFormControl" />);

      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      assert.strictEqual(wrapper.hasClass('woofFormControl'), true);
    });

    it('should have no margin', () => {
      const wrapper = shallow(<FormControl />);

      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.hasClass(classes.marginNormal), false);
      assert.strictEqual(wrapper.hasClass(classes.marginDense), false);
    });

    it('should have the margin normal class', () => {
      const wrapper = shallow(<FormControl margin="normal" />);

      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.hasClass(classes.marginNormal), true);
    });

    it('should have the margin dense class', () => {
      const wrapper = shallow(<FormControl margin="dense" />);

      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.hasClass(classes.marginDense), true);
      assert.strictEqual(wrapper.hasClass(classes.marginNormal), false);
    });
  });

  describe('initial state', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<FormControl />);
    });

    it('should not be dirty initially', () => {
      assert.strictEqual(wrapper.state().dirty, false);
    });

    it('should not be focused initially', () => {
      assert.strictEqual(wrapper.state().focused, false);
    });
  });

  describe('prop: required', () => {
    it('should not apply it to the DOM', () => {
      const wrapper = shallow(<FormControl required />);
      assert.strictEqual(wrapper.props().required, undefined);
    });
  });

  describe('input', () => {
    it('should be dirty with a value', () => {
      const wrapper = shallow(
        <FormControl>
          <Input value="bar" />
        </FormControl>,
      );
      assert.strictEqual(wrapper.state().dirty, true);
    });

    it('should be dirty with a defaultValue', () => {
      const wrapper = shallow(
        <FormControl>
          <Input defaultValue="bar" />
        </FormControl>,
      );
      assert.strictEqual(wrapper.state().dirty, true);
    });

    it('should be adorned with an endAdornment', () => {
      const wrapper = shallow(
        <FormControl>
          <Input endAdornment={<div />} />
        </FormControl>,
      );
      assert.strictEqual(wrapper.state().adornedStart, false);
    });

    it('should be adorned with a startAdornment', () => {
      const wrapper = shallow(
        <FormControl>
          <Input startAdornment={<div />} />
        </FormControl>,
      );
      assert.strictEqual(wrapper.state().adornedStart, true);
    });
  });

  describe('uiFormControl child context', () => {
    let wrapper;
    let uiFormControlContext;

    function loadChildContext() {
      uiFormControlContext = wrapper.instance().getChildContext().uiFormControl;
    }

    beforeEach(() => {
      wrapper = shallow(<FormControl />);
      loadChildContext();
    });

    describe('from state', () => {
      it('should have the dirty state from the instance', () => {
        assert.strictEqual(uiFormControlContext.dirty, false);
        wrapper.setState({ dirty: true });
        loadChildContext();
        assert.strictEqual(uiFormControlContext.dirty, true);
      });

      it('should have the focused state from the instance', () => {
        assert.strictEqual(uiFormControlContext.focused, false);
        wrapper.setState({ focused: true });
        loadChildContext();
        assert.strictEqual(uiFormControlContext.focused, true);
      });

      it('should have the adornedStart state from the instance', () => {
        assert.strictEqual(uiFormControlContext.adornedStart, false);
        wrapper.setState({ adornedStart: true });
        loadChildContext();
        assert.strictEqual(uiFormControlContext.adornedStart, true);
      });
    });

    describe('from props', () => {
      it('should have the required prop from the instance', () => {
        assert.strictEqual(uiFormControlContext.required, false);
        wrapper.setProps({ required: true });
        loadChildContext();
        assert.strictEqual(uiFormControlContext.required, true);
      });

      it('should have the error prop from the instance', () => {
        assert.strictEqual(uiFormControlContext.error, false);
        wrapper.setProps({ error: true });
        loadChildContext();
        assert.strictEqual(uiFormControlContext.error, true);
      });

      it('should have the margin prop from the instance', () => {
        assert.strictEqual(uiFormControlContext.margin, 'none');
        wrapper.setProps({ margin: 'dense' });
        loadChildContext();
        assert.strictEqual(uiFormControlContext.margin, 'dense');
      });
    });

    describe('callbacks', () => {
      describe('onDirty', () => {
        it('should set the dirty state', () => {
          assert.strictEqual(uiFormControlContext.dirty, false);
          uiFormControlContext.onDirty();
          loadChildContext();
          assert.strictEqual(uiFormControlContext.dirty, true);
          uiFormControlContext.onDirty();
          assert.strictEqual(uiFormControlContext.dirty, true);
        });
      });

      describe('onClean', () => {
        it('should clean the dirty state', () => {
          uiFormControlContext.onDirty();
          loadChildContext();
          assert.strictEqual(uiFormControlContext.dirty, true);
          uiFormControlContext.onClean();
          loadChildContext();
          assert.strictEqual(uiFormControlContext.dirty, false);
          uiFormControlContext.onClean();
          assert.strictEqual(uiFormControlContext.dirty, false);
        });
      });

      describe('handleFocus', () => {
        it('should set the focused state', () => {
          assert.strictEqual(wrapper.state('focused'), false);
          uiFormControlContext.onFocus();
          assert.strictEqual(wrapper.state('focused'), true);
          uiFormControlContext.onFocus();
          assert.strictEqual(wrapper.state('focused'), true);
        });

        it('should be able to use a onFocus property', () => {
          const handleFocus = sinon.spy();
          wrapper.setProps({ onFocus: handleFocus });
          uiFormControlContext.onFocus();
          assert.strictEqual(handleFocus.callCount, 1);
        });
      });

      describe('handleBlur', () => {
        it('should clear the focused state', () => {
          assert.strictEqual(wrapper.state('focused'), false);
          uiFormControlContext.onFocus();
          assert.strictEqual(wrapper.state('focused'), true);
          uiFormControlContext.onBlur();
          assert.strictEqual(wrapper.state('focused'), false);
          uiFormControlContext.onBlur();
          assert.strictEqual(wrapper.state('focused'), false);
        });

        it('should be able to use a onBlur property', () => {
          const handleBlur = sinon.spy();
          wrapper.setProps({ onBlur: handleBlur });
          uiFormControlContext.onFocus();
          uiFormControlContext.onBlur({});
          assert.strictEqual(handleBlur.callCount, 1);
        });
      });
    });
  });
});
