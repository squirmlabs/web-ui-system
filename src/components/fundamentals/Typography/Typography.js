import React from 'react';
import PropTypes from 'prop-types';
import UITypography from '@symbols/v1/Typography';
import withStyles from '@symbols/core/withStyles';
import { styles } from './styles';

function Typography(props) {
  const { classes, children, ...other } = props;
  return (
    <div className={classes.root}>
      <UITypography {...other}>{children}</UITypography>
    </div>
  );
}

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Typography);
