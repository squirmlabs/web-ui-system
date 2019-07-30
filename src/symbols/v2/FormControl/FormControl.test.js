import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import Input from '../Input';
import Select from '../Select';
import FormControl from './FormControl';

describe('<FormControl />', () => {
  let shallow;
  let classes;

  before(() => {
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

    it('should not be filled initially', () => {
      assert.strictEqual(wrapper.state().filled, false);
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
    it('should be filled with a value', () => {
      const wrapper = shallow(
        <FormControl>
          <Input value="bar" />
        </FormControl>,
      );
      assert.strictEqual(wrapper.state().filled, true);
    });

    it('should be filled with a defaultValue', () => {
      const wrapper = shallow(
        <FormControl>
          <Input defaultValue="bar" />
        </FormControl>,
      );
      assert.strictEqual(wrapper.state().filled, true);
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

  describe('select', () => {
    it('should not be adorned without a startAdornment', () => {
      const wrapper = shallow(
        <FormControl>
          <Select value="" />
        </FormControl>,
      );
      assert.strictEqual(wrapper.state().adornedStart, false);
    });

    it('should be adorned with a startAdornment', () => {
      const wrapper = shallow(
        <FormControl>
          <Select value="" input={<Input startAdornment={<div />} />} />
        </FormControl>,
      );
      assert.strictEqual(wrapper.state().adornedStart, true);
    });
  });

  describe('ssFormControl child context', () => {
    let wrapper;
    let ssFormControlContext;

    function loadChildContext() {
      ssFormControlContext = wrapper.instance().getChildContext().ssFormControl;
    }

    beforeEach(() => {
      wrapper = shallow(<FormControl />);
      loadChildContext();
    });

    describe('from state', () => {
      it('should have the filled state from the instance', () => {
        assert.strictEqual(ssFormControlContext.filled, false);
        wrapper.setState({ filled: true });
        loadChildContext();
        assert.strictEqual(ssFormControlContext.filled, true);
      });

      it('should have the focused state from the instance', () => {
        assert.strictEqual(ssFormControlContext.focused, false);
        wrapper.setState({ focused: true });
        loadChildContext();
        assert.strictEqual(ssFormControlContext.focused, true);
      });

      it('should have the adornedStart state from the instance', () => {
        assert.strictEqual(ssFormControlContext.adornedStart, false);
        wrapper.setState({ adornedStart: true });
        loadChildContext();
        assert.strictEqual(ssFormControlContext.adornedStart, true);
      });
    });

    describe('from props', () => {
      it('should have the required prop from the instance', () => {
        assert.strictEqual(ssFormControlContext.required, false);
        wrapper.setProps({ required: true });
        loadChildContext();
        assert.strictEqual(ssFormControlContext.required, true);
      });

      it('should have the error prop from the instance', () => {
        assert.strictEqual(ssFormControlContext.error, false);
        wrapper.setProps({ error: true });
        loadChildContext();
        assert.strictEqual(ssFormControlContext.error, true);
      });

      it('should have the margin prop from the instance', () => {
        assert.strictEqual(ssFormControlContext.margin, 'none');
        wrapper.setProps({ margin: 'dense' });
        loadChildContext();
        assert.strictEqual(ssFormControlContext.margin, 'dense');
      });
    });

    describe('callbacks', () => {
      describe('onFilled', () => {
        it('should set the filled state', () => {
          assert.strictEqual(ssFormControlContext.filled, false);
          ssFormControlContext.onFilled();
          loadChildContext();
          assert.strictEqual(ssFormControlContext.filled, true);
          ssFormControlContext.onFilled();
          assert.strictEqual(ssFormControlContext.filled, true);
        });
      });

      describe('onEmpty', () => {
        it('should clean the filled state', () => {
          ssFormControlContext.onFilled();
          loadChildContext();
          assert.strictEqual(ssFormControlContext.filled, true);
          ssFormControlContext.onEmpty();
          loadChildContext();
          assert.strictEqual(ssFormControlContext.filled, false);
          ssFormControlContext.onEmpty();
          assert.strictEqual(ssFormControlContext.filled, false);
        });
      });

      describe('handleFocus', () => {
        it('should set the focused state', () => {
          assert.strictEqual(wrapper.state().focused, false);
          ssFormControlContext.onFocus();
          assert.strictEqual(wrapper.state().focused, true);
          ssFormControlContext.onFocus();
          assert.strictEqual(wrapper.state().focused, true);
        });
      });

      describe('handleBlur', () => {
        it('should clear the focused state', () => {
          assert.strictEqual(wrapper.state().focused, false);
          ssFormControlContext.onFocus();
          assert.strictEqual(wrapper.state().focused, true);
          ssFormControlContext.onBlur();
          assert.strictEqual(wrapper.state().focused, false);
          ssFormControlContext.onBlur();
          assert.strictEqual(wrapper.state().focused, false);
        });
      });
    });
  });
});
