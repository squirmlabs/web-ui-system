import themeListener from './themeListener';

describe('themeListener', () => {
  it('unsubscribe() should work as expected', () => {
    const context = {
      __THEMING__: {
        unsubscribe: jest.fn()
      }
    };
    themeListener.unsubscribe(context, 'subscriptionId');
    expect(context.__THEMING__.unsubscribe).toBeCalledWith('subscriptionId');
  });
});
