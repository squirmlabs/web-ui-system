import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getDisplayName from 'recompose/getDisplayName';
import wrapDisplayName from 'recompose/wrapDisplayName';
import contextTypes from 'react-jss/lib/contextTypes';
import { create } from 'jss';
import * as ns from 'react-jss/lib/ns';
import jssPreset from '../jssPreset';
import createUITheme from '../create/createUITheme';
import themeListener from '../themeListener';
import createGenerateClassName from '../create/createGenerateClassName';
import getStylesCreator from '../getStylesCreator';
import { defaultProps, propTypes } from './propTypes';
// New JSS instance.
const jss = create(jssPreset());

// Use a singleton or the provided one by the context.
const generateClassName = createGenerateClassName();

// Global index counter to preserve source order.
// As we create the style sheet during componentWillMount lifecycle,
// children are handled after the parents, so the order of style elements would
// be parent->child. It is a problem though when a parent passes a className
// which needs to override any childs styles. StyleSheet of the child has a higher
// specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
let indexCounter = Number.MIN_SAFE_INTEGER;

export const sheetsManager: Map<*, *> = new Map();

// We use the same empty object to ref count the styles that don't need a theme object.
const noopTheme = {};

// In order to have self-supporting components, we rely on default theme when not provided.
let defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = createUITheme();
  return defaultTheme;
}

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.
const withStyles = (stylesOrCreator, options = {}) => (Component) => {
  const {
    withTheme = false, flip = null, name, ...styleSheetOptions
  } = options;
  const stylesCreator = getStylesCreator(stylesOrCreator);
  const listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';

  indexCounter += 1;
  stylesCreator.options.index = indexCounter;

  warning(
    indexCounter < 0,
    [
      'Storyline-UI: you might have a memory leak.',
      'The indexCounter is not supposed to grow that much.'
    ].join(' ')
  );

  class WithStyles extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.jss = this.context[ns.jss] || jss;

      const { uiThemeProviderOptions } = this.context;
      if (uiThemeProviderOptions) {
        if (uiThemeProviderOptions.sheetsManager) {
          this.sheetsManager = uiThemeProviderOptions.sheetsManager;
        }

        this.disableStylesGeneration = uiThemeProviderOptions.disableStylesGeneration;
      }

      // Attach the stylesCreator to the instance of the component as in the context
      // of react-hot-loader the hooks can be executed in a different closure context:
      // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
      this.stylesCreatorSaved = stylesCreator;
      this.sheetOptions = {
        generateClassName,
        ...this.context[ns.sheetOptions]
      };
      // We use || as the function call is lazy evaluated.
      this.theme = listenToTheme ? themeListener.initial(context) || getDefaultTheme() : noopTheme;
    }

    state = {};

    componentWillMount() {
      this.attach(this.theme);
    }

    componentDidMount() {
      if (!listenToTheme) {
        return;
      }

      this.unsubscribeId = themeListener.subscribe(this.context, (theme) => {
        const oldTheme = this.theme;
        this.theme = theme;
        this.attach(this.theme);

        // Rerender the component so the underlying component gets the theme update.
        // By theme update we mean receiving and applying the new class names.
        this.setState({}, () => {
          this.detach(oldTheme);
        });
      });
    }

    componentWillReceiveProps() {
      // react-hot-loader specific logic
      if (this.stylesCreatorSaved === stylesCreator || process.env.NODE_ENV === 'production') {
        return;
      }

      this.detach(this.theme);
      this.stylesCreatorSaved = stylesCreator;
      this.attach(this.theme);
    }

    componentWillUnmount() {
      this.detach(this.theme);

      if (this.unsubscribeId !== null) {
        themeListener.unsubscribe(this.context, this.unsubscribeId);
      }
    }

    attach(theme) {
      if (this.disableStylesGeneration) {
        return;
      }

      const stylesCreatorSaved = this.stylesCreatorSaved;
      let sheetManager = this.sheetsManager.get(stylesCreatorSaved);

      if (!sheetManager) {
        sheetManager = new Map();
        this.sheetsManager.set(stylesCreatorSaved, sheetManager);
      }

      let sheetManagerTheme = sheetManager.get(theme);

      if (!sheetManagerTheme) {
        sheetManagerTheme = {
          refs: 0,
          sheet: null
        };
        sheetManager.set(theme, sheetManagerTheme);
      }

      if (sheetManagerTheme.refs === 0) {
        const styles = stylesCreatorSaved.create(theme, name);
        let meta = name;

        if (process.env.NODE_ENV !== 'production' && !meta) {
          meta = getDisplayName(Component);
        }

        const sheet = this.jss.createStyleSheet(styles, {
          meta,
          classNamePrefix: meta,
          flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
          link: false,
          ...this.sheetOptions,
          ...stylesCreatorSaved.options,
          name,
          ...styleSheetOptions
        });

        sheetManagerTheme.sheet = sheet;
        sheet.attach();

        const sheetsRegistry = this.context[ns.sheetsRegistry];
        if (sheetsRegistry) {
          sheetsRegistry.add(sheet);
        }
      }

      sheetManagerTheme.refs += 1;
    }

    detach(theme) {
      if (this.disableStylesGeneration) {
        return;
      }

      const stylesCreatorSaved = this.stylesCreatorSaved;
      const sheetManager = this.sheetsManager.get(stylesCreatorSaved);
      const sheetManagerTheme = sheetManager.get(theme);

      sheetManagerTheme.refs -= 1;

      if (sheetManagerTheme.refs === 0) {
        sheetManager.delete(theme);
        this.jss.removeStyleSheet(sheetManagerTheme.sheet);
        const sheetsRegistry = this.context[ns.sheetsRegistry];
        if (sheetsRegistry) {
          sheetsRegistry.remove(sheetManagerTheme.sheet);
        }
      }
    }

    disableStylesGeneration = false;
    jss = null;
    sheetOptions = null;
    sheetsManager = sheetsManager;
    stylesCreatorSaved = null;
    theme = null;
    unsubscribeId = null;

    render() {
      const { classes: classesProp, innerRef, ...other } = this.props;

      let classes;
      let renderedClasses = {};

      if (!this.disableStylesGeneration) {
        const sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
        const sheetsManagerTheme = sheetManager.get(this.theme);
        renderedClasses = sheetsManagerTheme.sheet.classes;
      }

      if (classesProp) {
        classes = {
          ...renderedClasses,
          ...Object.keys(classesProp).reduce((accumulator, key) => {
            warning(
              renderedClasses[key] || this.disableStylesGeneration,
              [
                `Storyline-UI: the key \`${key}\` ` +
                  `provided to the classes property is not implemented in ${getDisplayName(Component)}.`,
                `You can only override one of the following: ${Object.keys(renderedClasses).join(',')}`
              ].join('\n')
            );

            warning(
              !classesProp[key] || typeof classesProp[key] === 'string',
              [
                `Storyline-UI: the key \`${key}\` ` +
                  `provided to the classes property is not valid for ${getDisplayName(Component)}.`,
                `You need to provide a non empty string instead of: ${classesProp[key]}.`
              ].join('\n')
            );

            if (classesProp[key]) {
              accumulator[key] = `${renderedClasses[key]} ${classesProp[key]}`;
            }

            return accumulator;
          }, {})
        };
      } else {
        classes = renderedClasses;
      }

      const more = {};

      // Provide the theme to the wrapped component.
      // So we don't have to use the `withTheme()` Higher-order Component.
      if (withTheme) {
        more.theme = this.theme;
      }

      return <Component classes={classes} {...more} {...other} ref={innerRef} />;
    }
  }

  WithStyles.propTypes = propTypes;

  WithStyles.contextTypes = {
    uiThemeProviderOptions: PropTypes.object,
    ...contextTypes,
    ...(listenToTheme ? themeListener.contextTypes : {})
  };

  if (process.env.NODE_ENV !== 'production') {
    WithStyles.displayName = wrapDisplayName(Component, 'WithStyles');
  }

  hoistNonReactStatics(WithStyles, Component);

  if (process.env.NODE_ENV !== 'production') {
    // Exposed for test purposes.
    WithStyles.Naked = Component;
    WithStyles.options = options;
  }

  return WithStyles;
};

export default withStyles;
