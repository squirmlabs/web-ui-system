import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@symbols/core/withStyles';

import Button from '../../web/Button';
import { styles } from './styles';

function Link({ classes, ...buttonProps }) {
  return (
    <Button {...buttonProps} className={classes.button}>
      Cancel
    </Button>
  );
}

Link.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default withStyles(styles)(Link);
