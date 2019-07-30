// @inheritedComponent Modal

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from '../Modal';
import withStyles from '@symbols/core//withStyles';
import Slide from '@symbols/core/transitions/Slide';
import Paper from '../Paper';
import { capitalize } from '@symbols/core/helpers';
import { getSlideDirection } from '@symbols/core/animation';
import { duration } from '@symbols/core//transitions';
import { styles } from './api';
/**
 *
 *
 * @class Drawer
 * @extends {React.Component}
 */
class Drawer extends React.Component {
  state = {
    // Let's assume that the Drawer will always be rendered on user space.
    // We use that state is order to skip the appear transition during the
    // initial mount of the component.
    firstMount: true
  };

  componentWillReceiveProps() {
    this.setState({
      firstMount: false
    });
  }
  /**
   *
   *
   * @returns
   * @memberof Drawer
   */
  render() {
    const {
      anchor: anchorProp,
      children,
      classes,
      className,
      elevation,
      ModalProps,
      onClose,
      open,
      PaperProps,
      SlideProps,
      theme,
      transitionDuration,
      variant,
      ...other
    } = this.props;

    let anchor = anchorProp;
    if (theme.direction === 'rtl' && ['left', 'right'].includes(anchor)) {
      anchor = anchor === 'left' ? 'right' : 'left';
    }

    const drawer = (
      <Paper
        elevation={variant === 'temporary' ? elevation : 0}
        square
        className={classNames(classes.paper, classes[`paperAnchor${capitalize(anchor)}`], {
          [classes[`paperAnchorDocked${capitalize(anchor)}`]]: variant !== 'temporary'
        })}
        {...PaperProps}
      >
        {children}
      </Paper>
    );

    if (variant === 'permanent') {
      return (
        <div className={classNames(classes.docked, className)} {...other}>
          {drawer}
        </div>
      );
    }

    const slidingDrawer = (
      <Slide
        in={open}
        direction={getSlideDirection(anchor)}
        timeout={transitionDuration}
        appear={!this.state.firstMount}
        {...SlideProps}
      >
        {drawer}
      </Slide>
    );

    if (variant === 'persistent') {
      return (
        <div className={classNames(classes.docked, className)} {...other}>
          {slidingDrawer}
        </div>
      );
    }

    // variant === temporary
    return (
      <Modal
        BackdropProps={{
          transitionDuration
        }}
        className={classNames(classes.modal, className)}
        open={open}
        onClose={onClose}
        {...other}
        {...ModalProps}
      >
        {slidingDrawer}
      </Modal>
    );
  }
}

Drawer.propTypes = {
  /**
   * Side from which the drawer will appear.
   */
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * The contents of the drawer.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The elevation of the drawer.
   */
  elevation: PropTypes.number,
  /**
   * Properties applied to the `Modal` element.
   */
  ModalProps: PropTypes.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the drawer is open.
   */
  open: PropTypes.bool,
  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: PropTypes.object,
  /**
   * Properties applied to the `Slide` element.
   */
  SlideProps: PropTypes.object,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number })
  ]),
  /**
   * The type of drawer.
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary'])
};

Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  transitionDuration: { enter: duration.enteringScreen, exit: duration.leavingScreen },
  variant: 'temporary' // Mobile first.
};

export default withStyles(styles, { name: 'UIDrawer', flip: false, withTheme: true })(Drawer);
