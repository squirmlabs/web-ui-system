// @flow
import React, { Component } from 'react';
import { object } from 'prop-types';
import { Map } from 'immutable';
import classNames from 'classnames';

import { withStyles } from '../../../../lib/system';
import Drawer from '../../../symbols/v1/Drawer';
import AppBar from '../../../symbols/v1/AppBar';
import Toolbar from '../../../symbols/v1/Toolbar';
import List from '../../../symbols/v1/List';
import { MenuItem } from '../../../symbols/v1/Menu';
import Paper from '../../../symbols/v1/Paper';
import Tabs, { Tab } from '../../../symbols/v1/Tabs';
import PhoneIcon from '../../../symbols/v1/UIIcons/Phone';
import FavoriteIcon from '../../../symbols/v1/UIIcons/Favorite';
import PersonPinIcon from '../../../symbols/v1/UIIcons/PersonPin';
import Typography from '../../../symbols/v1/Typography';
import TextField from '../../../symbols/v1/TextField';
import Divider from '../../../symbols/v1/Divider';
import IconButton from '../../../symbols/v1/IconButton';
import MenuIcon from '../../../symbols/v1/UIIcons/Menu';
import ChevronLeftIcon from '../../../symbols/v1/UIIcons/ChevronLeft';
import ChevronRightIcon from '../../../symbols/v1/UIIcons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

// Components
import withRoot from './withRoot';
import { styles } from './styles';

class Layout extends Component {
  state = {
    anchor: 'left',
    open: false,
    selectedTab: 0
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };
  handleChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };
  render() {
    const { classes, theme } = this.props;
    const {
      anchor,
      open,
      isUserFetched,
      enableBNClicked,
      saBanner,
      showBNMsg,
      selectedTab
    } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor={anchor}
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <Divider />
        </div>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }
    function TabContainer(props) {
      return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
          {props.children}
        </Typography>
      );
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open
            })}
          >
            <Paper style={{ width: 800 }}>
              {selectedTab === 0 && <TabContainer>Item One</TabContainer>}
              {selectedTab === 1 && <TabContainer>Item Two</TabContainer>}
              {selectedTab === 2 && <TabContainer>Item Three</TabContainer>}
              {selectedTab === 3 && <TabContainer>Item Four</TabContainer>}
              <Tabs
                value={this.state.selectedTab}
                onChange={this.handleChange}
                fullWidth
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab icon={<PhoneIcon />} />
                <Tab icon={<FavoriteIcon />} />
                <Tab icon={<PersonPinIcon />} />
                <Tab icon={<PersonPinIcon />} />
              </Tabs>
            </Paper>
          </main>

          {after}
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles, { withTheme: true })(Layout));

// export default withRoot(withStyles(styles, { withTheme: true })(Index));
