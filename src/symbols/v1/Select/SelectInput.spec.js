import React from 'react';
import { assert } from 'chai';
import keycode from 'keycode';
import { createShallow, createMount } from '../../lib/system/test-utils';
import Menu, { MenuItem } from '../Menu';
import consoleErrorMock from '../../test/utils/consoleErrorMock';
import SelectInput from './SelectInput';
import mockPortal from '../../test/utils/mockPortal';

describe('<SelectInput />', () => {
  let shallow;
  let mount;
  const defaultProps = {
    classes: { select: 'select' },
    autoWidth: false,
    value: 10,
    native: false,
    multiple: false,
    displayEmpty: false,
    children: [
      <MenuItem key={1} value={10}>
        Ten
      </MenuItem>,
      <MenuItem key={2} value={20}>
        Twenty
      </MenuItem>,
      <MenuItem key={3} value={30}>
        Thirty
      </MenuItem>,
    ],
  };

  beforeEach(() => {
    shallow = createShallow();
    mount = createMount();
    mockPortal.init();
  });

  afterEach(() => {
    mount.cleanUp();
    mockPortal.reset();
  });

  it('should render a correct top element', () => {
    const wrapper = shallow(<SelectInput {...defaultProps} />);
    assert.strictEqual(wrapper.name(), 'div');
  });

  it('should accept invalid child', () => {
    shallow(
      <SelectInput {...defaultProps}>
        {null}
        <MenuItem />
      </SelectInput>,
    );
  });

  describe('prop: readOnly', () => {
    it('should not trigger any event with readOnly', () => {
      const wrapper = shallow(<SelectInput {...defaultProps} readOnly />);
      wrapper
        .find(`.${defaultProps.classes.select}`)
        .simulate('keyDown', { which: keycode('down') });
      assert.strictEqual(wrapper.state().open, false);
    });
  });

  describe('prop: MenuProps', () => {
    it('should apply additional properties to the Menu component', () => {
      const wrapper = shallow(
        <SelectInput {...defaultProps} MenuProps={{ transitionDuration: 100 }} />,
      );
      assert.strictEqual(wrapper.find(Menu).props().transitionDuration, 100);
    });

    it('should be able to override PaperProps minWidth', () => {
      const wrapper = shallow(
        <SelectInput {...defaultProps} MenuProps={{ PaperProps: { style: { minWidth: 12 } } }} />,
      );
      assert.strictEqual(wrapper.find(Menu).props().PaperProps.style.minWidth, 12);
    });
  });

  describe('prop: displayEmpty', () => {
    it('should display the selected item even if its value is empty', () => {
      const wrapper = shallow(
        <SelectInput {...defaultProps} value="" displayEmpty>
          <MenuItem value="">Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectInput>,
      );
      assert.strictEqual(wrapper.find(`.${defaultProps.classes.select}`).props().children, 'Ten');
    });
  });

  describe('prop: renderValue', () => {
    it('should use the property to render the value', () => {
      const renderValue = x => String(-x);
      const wrapper = shallow(<SelectInput {...defaultProps} renderValue={renderValue} />);
      assert.strictEqual(wrapper.find(`.${defaultProps.classes.select}`).props().children, '-10');
    });
  });

  describe('prop: native=false', () => {
    it('should provide a value', () => {
      assert.throw(() => {
        shallow(<SelectInput {...defaultProps} value={undefined} />);
      }, /the `value` property is required/);
    });

    describe('prop: onChange', () => {
      let wrapper;
      let handleChange;
      let instance;

      beforeEach(() => {
        handleChange = sinon.spy();
        wrapper = mount(
          <SelectInput
            {...defaultProps}
            onChange={handleChange}
            MenuProps={{ transitionDuration: 0 }}
          />,
        );
        instance = wrapper.instance();
      });

      it('should call onChange when clicking an item', () => {
        wrapper.find(`.${defaultProps.classes.select}`).simulate('click');
        assert.strictEqual(wrapper.state().open, true);
        const portalLayer = wrapper
          .find('Portal')
          .instance()
          .getMountNode();
        portalLayer.querySelectorAll('li')[1].click();
        assert.strictEqual(wrapper.state().open, false);
        assert.strictEqual(handleChange.callCount, 1);
        assert.strictEqual(handleChange.args[0][0].target.value, 20);
      });

      it('should ignore onBlur the first time the menu is open', () => {
        const handleBlur = sinon.spy();
        wrapper.setProps({ onBlur: handleBlur });

        wrapper.find(`.${defaultProps.classes.select}`).simulate('click');
        assert.strictEqual(wrapper.state().open, true);
        assert.strictEqual(instance.ignoreNextBlur, true);
        wrapper.find(`.${defaultProps.classes.select}`).simulate('blur');
        assert.strictEqual(handleBlur.callCount, 0);
        assert.strictEqual(instance.ignoreNextBlur, false);
        wrapper.find(`.${defaultProps.classes.select}`).simulate('blur');
        assert.strictEqual(handleBlur.callCount, 1);
      });

      ['space', 'up', 'down'].forEach(key => {
        it(`'should open menu when pressed ${key} key on select`, () => {
          wrapper
            .find(`.${defaultProps.classes.select}`)
            .simulate('keyDown', { which: keycode(key) });
          assert.strictEqual(wrapper.state().open, true);
          assert.strictEqual(instance.ignoreNextBlur, true);
        });
      });

      it('should call handleClose', () => {
        wrapper.find(`.${defaultProps.classes.select}`).simulate('click');
        assert.strictEqual(wrapper.state().open, true);

        const portalLayer = wrapper
          .find('Portal')
          .instance()
          .getMountNode();
        const backdrop = portalLayer.querySelector('[data-ui-test="Backdrop"]');
        backdrop.click();
        assert.strictEqual(wrapper.state().open, false);
      });
    });

    describe('prop: open (controlled)', () => {
      class ControlledWrapper extends React.Component {
        state = {
          open: false,
        };

        render() {
          return (
            <SelectInput
              {...defaultProps}
              open={this.state.open}
              onClose={() => this.setState({ open: false })}
              onOpen={() => this.setState({ open: true })}
            >
              <MenuItem onClick={() => this.setState({ open: false })}>close</MenuItem>
            </SelectInput>
          );
        }
      }

      it('should allow to control closing by passing onClose props', () => {
        const wrapper = mount(<ControlledWrapper />);
        wrapper.find(`.${defaultProps.classes.select}`).simulate('click');
        assert.strictEqual(wrapper.state().open, true);
        wrapper.find('MenuItem').simulate('click');
        assert.strictEqual(wrapper.state().open, false);
      });
    });
  });

  describe('prop: native=true', () => {
    it('should render a native select', () => {
      const wrapper = shallow(
        <SelectInput {...defaultProps} native>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </SelectInput>,
      );
      assert.strictEqual(wrapper.find('select').props().value, 10);
    });

    it('should response to update event', () => {
      const handleChange = sinon.spy();
      const wrapper = mount(
        <SelectInput {...defaultProps} native onChange={handleChange}>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </SelectInput>,
      );

      wrapper.find('select').simulate('change', { target: { value: 20 } });
      assert.strictEqual(handleChange.callCount, 1);
      assert.strictEqual(handleChange.args[0][0].target.value, 20);
    });
  });

  describe('prop: autoWidth', () => {
    it('should take the anchor width into account', () => {
      const wrapper = shallow(<SelectInput {...defaultProps} />);
      wrapper.setState({ anchorEl: { clientWidth: 14 } });
      assert.strictEqual(wrapper.find(Menu).props().PaperProps.style.minWidth, 14);
    });

    it('should not take the anchor width into account', () => {
      const wrapper = shallow(<SelectInput {...defaultProps} autoWidth />);
      wrapper.setState({ anchorEl: { clientWidth: 14 } });
      assert.strictEqual(wrapper.find(Menu).props().PaperProps.style.minWidth, undefined);
    });
  });

  describe('prop: multiple', () => {
    beforeEach(() => {
      consoleErrorMock.sinon.spy();
    });

    afterEach(() => {
      consoleErrorMock.reset();
    });

    it('should serialize multiple select value', () => {
      const wrapper = shallow(<SelectInput {...defaultProps} value={[10, 30]} multiple />);
      assert.strictEqual(wrapper.find('input').props().value, '10,30');
      assert.deepEqual(wrapper.find(MenuItem).map(wrapper2 => wrapper2.props().selected), [
        true,
        false,
        true,
      ]);
    });

    it('should throw if non array', () => {
      assert.throw(() => {
        shallow(<SelectInput {...defaultProps} multiple />);
      }, /the `value` property must be an array/);
    });

    it('should warn if the input is invalid', () => {
      shallow(<SelectInput {...defaultProps} multiple native />);
      assert.match(
        consoleErrorMock.args()[0][0],
        /Storyline-UI: you can not use the `native` and `multiple`/,
      );
    });

    describe('prop: onChange', () => {
      let wrapper;
      let handleChange;

      beforeEach(() => {
        handleChange = sinon.spy();
        wrapper = mount(
          <SelectInput
            {...defaultProps}
            multiple
            value={[20, 30]}
            name="age"
            onChange={handleChange}
            MenuProps={{ transitionDuration: 0 }}
          />,
        );
      });

      it('should call onChange when clicking an item', () => {
        wrapper.find(`.${defaultProps.classes.select}`).simulate('click');
        assert.strictEqual(wrapper.state().open, true);
        const portalLayer = wrapper
          .find('Portal')
          .instance()
          .getMountNode();

        portalLayer.querySelectorAll('li')[1].click();
        assert.strictEqual(wrapper.state().open, true);
        assert.strictEqual(handleChange.callCount, 1);
        assert.deepEqual(handleChange.args[0][0].target.value, [30]);
        assert.deepEqual(handleChange.args[0][0].target.name, 'age');
        wrapper.setProps({ value: [30] });

        portalLayer.querySelectorAll('li')[0].click();
        assert.strictEqual(wrapper.state().open, true);
        assert.strictEqual(handleChange.callCount, 2);
        assert.deepEqual(handleChange.args[1][0].target.value, [30, 10]);
      });
    });
  });
});
