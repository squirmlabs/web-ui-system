import React from 'react';
import classNames from 'classnames';
import warning from 'warning';
import withStyles from '@symbols/core//withStyles';
import { defaultProps, propTypes } from './propTypes';

export const styles = (theme) => {
  const shadows = {};
  theme.shadows.forEach((shadow, index) => {
    shadows[`shadow${index}`] = {
      boxShadow: shadow
    };
  });

  return {
    root: {
      backgroundColor: theme.palette.background.paper
    },
    rounded: {
      borderRadius: 2
    },
    ...shadows
  };
};

function Paper(props) {
  const {
    classes,
    className: classNameProp,
    component: Component,
    square,
    elevation,
    ...other
  } = props;

  warning(
    elevation >= 0 && elevation < 25,
    `Material-UI: this elevation \`${elevation}\` is not implemented.`
  );

  const className = classNames(
    classes.root,
    // classes[`shadow${elevation >= 0 ? elevation : 0}`],
    {
      [classes.rounded]: !square
    },
    classNameProp
  );

  return <Component className={className} {...other} />;
}

Paper.propTypes = propTypes;

Paper.defaultProps = defaultProps;

export default withStyles(styles, { name: 'UIPaper' })(Paper);
