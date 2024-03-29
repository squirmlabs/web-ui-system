// @flow
/* eslint-disable no-param-reassign */
import warning from 'warning';

// Follow motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
export const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300, // most basic recommended timing
  complex: 375, // this is to be used in complex animations
  enteringScreen: 225, // recommended when something is entering screen
  leavingScreen: 195 // recommended when something is leaving screen
};

export const formatMs = (milliseconds: number) => `${Math.round(milliseconds)}ms`;
export const isString = (value: any) => typeof value === 'string';
export const isNumber = (value: any) => !Number.isNaN(parseFloat(value));

/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */
export default {
  easing,
  duration,
  create(
    props: string | Array<string> = ['all'],
    options: {
      prop?: string,
      duration?: number | string,
      easing?: string,
      delay?: number | string
    } = {}
  ) {
    const {
      duration: durationOption = duration.standard,
      easing: easingOption = easing.easeInOut,
      delay = 0,
      ...other
    } = options;

    warning(
      isString(props) || Array.isArray(props),
      'Storyline-UI: argument "props" must be a string or Array.'
    );
    warning(
      isNumber(durationOption) || isString(durationOption),
      `Storyline-UI: argument "duration" must be a number or a string but found ${durationOption}.`
    );
    warning(isString(easingOption), 'Storyline-UI: argument "easing" must be a string.');
    warning(
      isNumber(delay) || isString(delay),
      'Storyline-UI: argument "delay" must be a string or a string.'
    );
    warning(
      Object.keys(other).length === 0,
      `Storyline-UI: unrecognized argument(s) [${Object.keys(other).join(',')}]`
    );

    return (Array.isArray(props) ? props : [props])
      .map((animatedProp) =>
        `${animatedProp} ${
          typeof durationOption === 'string' ? durationOption : formatMs(durationOption)
        } ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`)
      .join(',');
  },
  getAutoHeightDuration(height: ?number) {
    if (!height) {
      return 0;
    }

    const constant = height / 36;

    // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }
};
