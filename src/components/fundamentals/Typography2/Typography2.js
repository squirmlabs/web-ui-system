import React from 'react';
import PropTypes from 'prop-types';
import UITypography2 from '@symbols/v2/Typography';
import withStyles from '@symbols/core/withStyles';
import { styles } from './styles';

function Typography2(props) {
  const { classes, children, ...other } = props;
  return (
    <div className={classes.root}>
      <UITypography2 {...other}>{children}</UITypography2>
    </div>
  );
}

Typography2.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Typography2);
