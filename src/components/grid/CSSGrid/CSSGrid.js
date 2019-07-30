import React from 'react';
import withStyles from '@symbols/core/withStyles';
import { styles } from './styles';
import { propTypes } from './propTypes';

function CSSGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.gridContainer}>
      <div className={`${classes.avatar} ${classes.area}`}>avatar</div>
      <div className={`${classes.flag} ${classes.area}`}>flag</div>
      <div className={`${classes.subject} ${classes.area}`}>subject</div>
      <div className={`${classes.icons} ${classes.area}`}>icons</div>
      <div className={`${classes.author} ${classes.area}`}>author</div>
      <div className={`${classes.date} ${classes.area}`}>date</div>
      <div className={`${classes.byline} ${classes.area}`}>byline</div>
      <div className={`${classes.tags} ${classes.area}`}>tags</div>
    </div>
  );
}

CSSGrid.propTypes = propTypes;

export default withStyles(styles)(CSSGrid);
