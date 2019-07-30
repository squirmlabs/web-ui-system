import React from 'react';
import classNames from 'classnames';
import withStyles from '@symbols/core//withStyles';
import { capitalize } from '@symbols/core/helpers';
import { propTypes } from './propTypes';

export const styles = (theme) => ({
  root: {
    userSelect: 'none'
  },
  colorPrimary: {
    color: theme.palette.primary.main
  },
  colorSecondary: {
    color: theme.palette.secondary.main
  },
  colorAction: {
    color: theme.palette.action.active
  },
  colorDisabled: {
    color: theme.palette.action.disabled
  },
  colorError: {
    color: theme.palette.error.main
  },
  fontSize: {
    width: '1em',
    height: '1em'
  }
});

function Icon(props) {
  const {
    children, classes, className: classNameProp, color, fontSize, ...other
  } = props;

  const className = classNames(
    'material-icons',
    classes.root,
    {
      [classes[`color${capitalize(color)}`]]: color !== 'inherit',
      [classes.fontSize]: fontSize
    },
    classNameProp
  );

  return (
    <span className={className} aria-hidden="true" {...other}>
      {children}
    </span>
  );
}

Icon.propTypes = propTypes;

Icon.defaultProps = {
  color: 'inherit',
  fontSize: false
};

Icon.uiName = 'Icon';

export default withStyles(styles, { name: 'UIIcon' })(Icon);
