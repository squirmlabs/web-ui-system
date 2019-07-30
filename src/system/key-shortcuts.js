// Special Keys - and their codes
const SPECIAL_KEYS = {
  esc: 27,
  escape: 27,
  tab: 9,
  space: 32,
  return: 13,
  enter: 13,
  backspace: 8,

  scrolllock: 145,
  scroll_lock: 145,
  scroll: 145,
  capslock: 20,
  caps_lock: 20,
  caps: 20,
  numlock: 144,
  num_lock: 144,
  num: 144,

  pause: 19,
  break: 19,

  insert: 45,
  home: 36,
  delete: 46,
  end: 35,

  pageup: 33,
  page_up: 33,
  pu: 33,

  pagedown: 34,
  page_down: 34,
  pd: 34,

  left: 37,
  up: 38,
  right: 39,
  down: 40,

  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123
};

function shortcuts(shortcut, callback, opt) {
  // Provide a set of default options
  const DEFAULT_OPTIONS = {
    type: 'keydown',
    propagate: false,
    target: document
  };
  if (!opt) opt = DEFAULT_OPTIONS;
  else {
    for (const initialOption in DEFAULT_OPTIONS) {
      if (typeof opt[initialOption] === 'undefined') {
        opt[initialOption] = DEFAULT_OPTIONS[initialOption];
      }
    }
  }

  let ele = opt.target;
  if (typeof opt.target === 'string') ele = document.getElementById(opt.target);
  const ths = this;

  // The function to be called at keypress
  const func = function(e) {
    e = e || window.event;

    let shortKeyCode;
    let key;

    // Find Which key is pressed
    if (e.keyCode) shortKeyCode = e.keyCode;
    else if (e.which) shortKeyCode = e.which;
    let character = String.fromCharCode(shortKeyCode).toLowerCase();

    const keys = shortcut.toLowerCase().split('+');

    // Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
    let keyPressCount = 0;

    // Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
    const SHIFT_NUMBS = {
      '`': '~',
      1: '!',
      2: '@',
      3: '#',
      4: '$',
      5: '%',
      6: '^',
      7: '&',
      8: '*',
      9: '(',
      0: ')',
      '-': '_',
      '=': '+',
      ';': ':',
      "'": '"',
      ',': '<',
      '.': '>',
      '// ': '?',
      '\\': '|'
    };

    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      // Modifiers
      if (key === 'ctrl' || key === 'control') {
        if (e.ctrlKey) keyPressCount++;
      } else if (key === 'shift') {
        if (e.shiftKey) keyPressCount++;
      } else if (key === 'alt') {
        if (e.altKey) keyPressCount++;
      } else if (key.length > 1) {
        // If it is a special key
        if (SPECIAL_KEYS[key] === shortKeyCode) keyPressCount++;
      } else {
        // The special keys did not match
        if (character === key) keyPressCount++;
        else {
          if (SHIFT_NUMBS[character] && e.shiftKey) {
            // Stupid Shift key bug created by using lowercase
            character = SHIFT_NUMBS[character];
            if (character === key) keyPressCount++;
          }
        }
      }
    }

    if (keyPressCount === keys.length) {
      callback(e);

      if (!opt.propagate) {
        // Stop the event
        // e.cancelBubble is supported by IE - this will kill the bubbling process.
        e.cancelBubble = true;
        e.returnValue = false;

        // e.stopPropagation works only in Firefox.
        if (e.stopPropagation) {
          e.stopPropagation();
          e.preventDefault();
        }
        return false;
      }
    }
  };

  // Attach the function with the event
  if (ele.addEventListener) ele.addEventListener(opt.type, func, false);
  else if (ele.attachEvent) ele.attachEvent(`on${opt.type}`, func);
  else ele[`on${opt.type}`] = func;
}

export default shortcuts;
