// @flow
import React from 'react';
import type { ComponentType } from 'react';

import { UIThemeProvider, createUITheme } from '../../../../lib/system';
import indigo from '@symbols/core/colors/indigo';
import green from '@symbols/core/colors/green';
import Reboot from '../../../symbols/elements/Reboot';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createUITheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[901],
      dark: indigo[800]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
});

function withRoot(Component: ComponentType<*>) {
  function WithRoot(props: Object) {
    // UIThemeProvider makes the theme available down the React tree
    // using React context.
    return (
      <UIThemeProvider theme={theme}>
        {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Reboot />
        <Component {...props} />
      </UIThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
