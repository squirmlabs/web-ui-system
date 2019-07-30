import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@symbols/core/withStyles';

import Button from './Button';
import KeyboardArrowUp from '@symbols/v1/UIIcons/KeyboardArrowUp';
import KeyboardArrowDown from '@symbols/v1/UIIcons/KeyboardArrowDown';
import { styles } from './IconButton/styles';

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleToggle = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  };

  render() {
    const {
      classes, iconLeft, iconRight, label, ...buttonProps
    } = this.props;
    const { open } = this.state;
    return (
      <div>
        {iconRight &&
          !open && (
          <Button
            {...buttonProps}
            onClick={this.handleToggle}
            className={classes.button}
          >
              {label}
            <KeyboardArrowDown className={classes.rightIcon} />
          </Button>
        )}
        {iconRight &&
          open && (
          <Button
            {...buttonProps}
            onClick={this.handleToggle}
            active
            className={classes.button}
          >
              {label}
            <KeyboardArrowUp className={classes.rightIcon} />
          </Button>
        )}
        {iconLeft &&
          !open && (
          <Button
            {...buttonProps}
            onClick={this.handleToggle}
            className={classes.button}
          >
            <KeyboardArrowDown className={classes.leftIcon} />
              {label}
          </Button>
        )}
        {iconLeft &&
          open && (
          <Button
            {...buttonProps}
            onClick={this.handleToggle}
            active
            className={classes.button}
          >
            <KeyboardArrowUp className={classes.leftIcon} />
              {label}
          </Button>
        )}
      </div>
    );
  }
}

IconButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
};

export default withStyles(styles)(IconButton);
