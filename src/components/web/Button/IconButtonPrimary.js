import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@symbols/core/withStyles';

import Button from './Button';
import AddCircle from '@symbols/v1/UIIcons/AddCircle';
import { styles } from './ButtonNewElement/styles';

function IconButtonPrimary({
  classes, iconLeft, iconRight, label, ...buttonProps
}) {
  return (
    <Button {...buttonProps} className={classes.button}>
      <AddCircle className={classes.leftIcon} />
      {label}
    </Button>
  );
}

IconButtonPrimary.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
};

export default withStyles(styles)(IconButtonPrimary);
