import React from 'react';
import Transition from 'react-transition-group/Transition';
import { defaultProps, propTypes } from './propTypes';
import { getClassNames } from './classNames';
/**
 * @ignore - internal component.
 */
class Ripple extends React.Component {
  state = {
    rippleVisible: false,
    rippleLeaving: false
  };

  handleEnter = () => {
    this.setState({
      rippleVisible: true
    });
  };

  handleExit = () => {
    this.setState({
      rippleLeaving: true
    });
  };

  render() {
    const {
      classes,
      className: classNameProp,
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      ...other
    } = this.props;
    const { rippleVisible, rippleLeaving } = this.state;
    const classNames = getClassNames(2, this.props, rippleVisible, rippleLeaving);

    return (
      <Transition onEnter={this.handleEnter} onExit={this.handleExit} {...other}>
        <span className={classNames.className()}>
          <span className={classNames.rippleClassName()} style={classNames.rippleStyles()} />
        </span>
      </Transition>
    );
  }
}

Ripple.propTypes = propTypes;

Ripple.defaultProps = defaultProps;

export default Ripple;
