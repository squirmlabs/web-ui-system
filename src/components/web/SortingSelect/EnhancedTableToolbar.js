import React from 'react';
import classnames from 'classnames';
import { enhancedTableToolbarProptypes } from './propTypes';
import Toolbar from '@symbols/elements/Toolbar';
import IconButton from '@symbols/elements/IconButton';
import Tooltip from '@symbols/elements/Tooltip';
import DeleteIcon from '@symbols/elements/UIIcons/Delete';
import FilterListIcon from '@symbols/elements/UIIcons/FilterList';
import Typography from '@symbols/elements/Typography';
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
