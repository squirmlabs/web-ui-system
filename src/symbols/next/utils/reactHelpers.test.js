import React from 'react';
import { assert } from 'chai';
import { spy } from 'sinon';
import { isSSElement, setRef } from './reactHelpers';
import { Input, ListItemAvatar, ListItemSecondaryAction, SvgIcon } from '..';

describe('utils/reactHelpers.js', () => {
  describe('isSSElement', () => {
    it('should match static ssName property', () => {
      const Component = () => null;
      Component.ssName = 'Component';

      assert.strictEqual(isSSElement(<Component />, ['Component']), true);
      assert.strictEqual(isSSElement(<div />, ['Input']), false);
      assert.strictEqual(isSSElement(null, ['SvgIcon']), false);
      assert.strictEqual(isSSElement('TextNode', ['SvgIcon']), false);
    });

    it('should be truthy for matching components', () => {
      [
        [Input, 'Input'],
        [ListItemAvatar, 'ListItemAvatar'],
        [ListItemSecondaryAction, 'ListItemSecondaryAction'],
        [SvgIcon, 'SvgIcon'],
      ].forEach(([Component, ssName]) => {
        assert.strictEqual(isSSElement(<Component />, [ssName]), true);
      });
    });
  });

  describe('setRef', () => {
    it('can handle callback refs', () => {
      const ref = spy();
      const instance = 'proxy';

      setRef(ref, instance);

      assert.strictEqual(ref.called, true);
      assert.strictEqual(ref.firstCall.args[0], instance);
    });

    it('can handle ref objects', () => {
      const ref = React.createRef();
      const instance = 'proxy';

      setRef(ref, instance);

      assert.strictEqual(ref.current, instance);
    });

    it('ignores falsy refs without errors', () => {
      const instance = 'proxy';

      // all no-ops
      setRef(undefined, instance);
      setRef(null, instance);
    });

    it('throws on legacy string refs', () => {
      assert.throws(() => setRef('stringRef1', 'proxy'));
    });
  });
});
