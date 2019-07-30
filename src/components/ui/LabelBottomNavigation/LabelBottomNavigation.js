import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../symbols/core/withStyles';
import BottomNavigation, { BottomNavigationAction } from '../../../symbols/v1/BottomNavigation';
import Icon from '../../../symbols/v1/Icon';
import RestoreIcon from '../../../symbols/v1/UIIcons/Report';
import FavoriteIcon from '../../../symbols/v1/UIIcons/Favorite';
import LocationOnIcon from '../../../symbols/v1/UIIcons/Mail';

const styles = {
  root: {
    width: 500
  }
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabelBottomNavigation);
