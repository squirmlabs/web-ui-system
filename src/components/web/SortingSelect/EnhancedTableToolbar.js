import React from 'react';
import classnames from 'classnames';
import { enhancedTableToolbarProptypes } from './propTypes';
import Toolbar from '@symbols/v1/Toolbar';
import IconButton from '@symbols/v1/IconButton';
import Tooltip from '@symbols/v1/Tooltip';
import DeleteIcon from '@symbols/v1/UIIcons/Delete';
import FilterListIcon from '@symbols/v1/UIIcons/FilterList';
import Typography from '@symbols/v1/Typography';
import withStyles from '@symbols/core/withStyles';
import { toolbarStyles } from './styles';

const EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classnames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Nutrition
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = enhancedTableToolbarProptypes;

export default withStyles(toolbarStyles)(EnhancedTableToolbar);
