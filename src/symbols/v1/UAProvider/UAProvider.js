import PropTypes from 'prop-types';
import React, { Component } from 'react';
import UAParser from 'ua-parser-js';
import availableAgents from './availableAgents';

// Initialize UAParser
const uaParser = new UAParser();

// UA State
const uaResults = {
  android: false,
  ios: false,
  mobile: false,
  windows: false,
  mac: false,
  linux: false,
  computer: false,
  firefox: false,
  chrome: false,
  edge: false,
  safari: false
};

class UAProvider extends Component {
  constructor(props, context) {
    super(props, context);

    // Set UserAgent from window.navigator.userAgent
    uaParser.setUA(props.ua);

    // Android
    uaResults.android = uaParser.getOS().name === 'Android';

    // iOS
    uaResults.ios = uaParser.getOS().name === 'iOS';

    // Mobile
    uaResults.mobile =
      uaResults.android ||
      uaResults.ios ||
      uaParser.getDevice().type === 'mobile';

    // Operating System
    uaResults.windows = uaParser.getOS().name === 'Windows';
    uaResults.mac = uaParser.getOS().name === 'Mac OS';
    uaResults.linux = uaParser.getOS().name === 'Linux';

    // Computer
    uaResults.computer =
      uaResults.windows ||
      uaResults.mac ||
      uaResults.linux ||
      uaParser.getDevice().type === undefined;

    // Browser
    uaResults.firefox = uaParser.getBrowser().name === 'Firefox';
    uaResults.chrome = uaParser.getBrowser().name === 'Chrome';
    uaResults.edge = uaParser.getBrowser().name === 'Edge';
    uaResults.safari = uaParser.getBrowser().name === 'Safari';
  }

  // By adding childContextTypes and getChildContext to UAProvider (the context provider),
  // React passes the information down automatically and any component in the subtree can access it by defining contextTypes.

  // If contextTypes is not defined, then context will be an empty object.
  getChildContext() {
    return {
      ua: {
        parser: uaParser,
        uaResults
      }
    };
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

if (process.env.NODE_ENV !== 'production') {
  UAProvider.propTypes = {
    ua: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  };
}

UAProvider.childContextTypes = {
  ua: PropTypes.object.isRequired
};

export default UAProvider;
