import UAParser from 'ua-parser-js';
import { isBrowserIE, isBrowserSafari, parseUA } from '../userDeviceAgent';

describe('parseUA', () => {
  let uaParser;
  let uaMock;

  beforeEach(() => {
    uaParser = new UAParser();
    uaMock = {
      browser: {
        name: 'Firefox',
        version: '57.0',
        major: '57',
      },
      device: {},
      engine: {
        name: 'Gecko',
        version: '57.0',
      },
      result: {
        ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:57.0) Gecko/20100101 Firefox/57.0',
        browser: {
          name: 'Firefox',
          version: '57.0',
          major: '57',
        },
        engine: {
          name: 'Gecko',
          version: '57.0',
        },
        os: {
          name: 'Mac OS',
          version: '10.11',
        },
        device: {},
        cpu: {},
      },
      os: {
        name: 'Mac OS',
        version: '10.11',
      },
    };
  });

  it('tests if parseUA is functional', () => {
    expect(parseUA(uaParser).browser.name).toEqual('PhantomJS');
  });

  it('tests if isBrowserSafari is functional', () => {
    expect(isBrowserSafari(uaMock)).toEqual(false);
  });

  it('tests if isBrowserIE is functional', () => {
    expect(isBrowserIE(uaMock)).toEqual(false);
  });
});
