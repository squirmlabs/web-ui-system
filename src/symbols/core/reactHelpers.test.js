import React from 'react';
import { assert } from 'chai';
import { isUIComponent, isUIElement } from './reactHelpers';
import SvgIcon from '../../common/SvgIcon';

describe('lib/reactHelpers.js', () => {
  describe('isUIElement', () => {
    it('should match static uiName property', () => {
      const Component = () => null;
      Component.uiName = 'Component';

      assert.strictEqual(isUIElement(<Component />, ['Component']), true);
      assert.strictEqual(isUIElement(<div />, ['Input']), false);
      assert.strictEqual(isUIElement(null, ['SvgIcon']), false);
      assert.strictEqual(isUIElement('TextNode', ['SvgIcon']), false);
    });

    it('should be truthy for matching components', () => {
      [
        [SvgIcon, 'SvgIcon'],
      ].forEach(([Component, uiName]) => {
        assert.strictEqual(isUIElement(<Component />, [uiName]), true);
      });
    });
  });

  describe('isUIComponent', () => {
    it('should match static uiName property', () => {
      [
        [SvgIcon, 'SvgIcon'],
      ].forEach(([Component, uiName]) => {
        assert.strictEqual(isUIComponent(Component, [uiName]), true);
      });
    });
  });
});
