import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import LabeledCheckbox from './';

const minProps = {};

describe('Component: <LabeledCheckbox />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LabeledCheckbox {...minProps} />);
    });

    it('should render', () => {
        expect(wrapper.length).toEqual(1);
    });

    describe('label', () => {
        let props, wrapper, node;

        beforeEach(() => {
            props = {
                ...minProps,
                label: 'Test label'
            };
            wrapper = shallow(<LabeledCheckbox {...props} />);
            node = wrapper.find('.LabeledCheckbox__label').first();
        });

        it('should show label when provided', () => {
            expect(node.text().trim()).toEqual(props.label);
        });
    });

    describe('selected is true', () => {
        let props, wrapper;

        beforeEach(() => {
            props = {
                ...minProps,
                selected: true
            };
            wrapper = shallow(<LabeledCheckbox {...props} />);
        });

        it('should have active classname', () => {
            expect(wrapper.hasClass('LabeledCheckbox--selected')).toEqual(true);
        });
    });

    describe('selected is false', () => {
        let props, wrapper;

        beforeEach(() => {
            props = {
                ...minProps,
                selected: false
            };
            wrapper = shallow(<LabeledCheckbox {...props} />);
        });

        it('should not have active classname', () => {
            expect(wrapper.hasClass('LabeledCheckbox--selected')).toEqual(false);
        });
    });
});
