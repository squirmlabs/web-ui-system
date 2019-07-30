import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../symbols/core/withStyles';
import BottomNavigation, { BottomNavigationAction } from '../../../symbols/elements/BottomNavigation';
import Icon from '../../../symbols/elements/Icon';
import RestoreIcon from '../../../symbols/elements/UIIcons/Report';
import FavoriteIcon from '../../../symbols/elements/UIIcons/Favorite';
import LocationOnIcon from '../../../symbols/elements/UIIcons/Mail';

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
