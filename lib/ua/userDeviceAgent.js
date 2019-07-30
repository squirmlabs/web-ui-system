import { isDefined } from '../is';

export function parseUA(uaParser) {
  // User Agent
  const uaBrowser = uaParser.getBrowser();
  const uaDevice = uaParser.getDevice();
  const uaEngine = uaParser.getEngine();
  const uaResult = uaParser.getResult();
  const uaOs = uaParser.getOS();

  return {
    browser: uaBrowser,
    device: uaDevice,
    engine: uaEngine,
    result: uaResult,
    os: uaOs,
  };
}

export function isWebView() {
  // iOS Safari has VERSION, iOS chrome has CriOS, make sure userAgent has neither
  return /(iPhone|iPod|iPad).*AppleWebKit(?!.*(Version|CriOS))/i.test(navigator.userAgent);
}

// Operating System
export function getOS(ua) {
  return ua.os.name;
}

export function isOSiOS(ua) {
  return isDefined(getOS(ua)) && getOS(ua) === 'iOS';
}

export function isOSWIN(ua) {
  return isDefined(getOS(ua)) && getOS(ua) === 'Windows';
}

export function isOSMacOS(ua) {
  return isDefined(getOS(ua)) && getOS(ua) === 'Mac OS';
}

// Browser
export function getBrowser(ua) {
  return ua.browser.name;
}

export function isBrowserSafari(ua) {
  return isDefined(getBrowser(ua)) && getBrowser(ua) === 'Safari';
}

export function isBrowserIE(ua) {
  return isDefined(getBrowser(ua)) && getBrowser(ua) === 'IE';
}

export function isBrowserFirefox(ua) {
  return isDefined(getBrowser(ua)) && getBrowser(ua) === 'Firefox';
}

export function isBrowserMobileSafari(ua) {
  return isDefined(getBrowser(ua)) && getBrowser(ua) === 'Mobile Safari';
}

export function isChrome(ua) {
  return isDefined(getBrowser(ua)) && getBrowser(ua) === 'Chrome';
}

export function isBrowserChrome(ua) {
  return isChrome(ua);
}
export function isBrowserMobileChrome(ua) {
  return isChrome(ua);
}
