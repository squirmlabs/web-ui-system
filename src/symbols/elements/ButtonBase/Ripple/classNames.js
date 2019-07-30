import classNames from 'classnames';

export const getClassNames = (division, props, rippleVisible, rippleLeaving) => {
  return {
    className: () => {
      const { classes, classNameProp, pulsate } = props;
      return classNames(
        classes.wrapper,
        {
          [classes.wrapperLeaving]: rippleLeaving,
          [classes.wrapperPulsating]: pulsate
        },
        classNameProp
      );
    },
    rippleClassName: () => {
      const { classes, pulsate } = props;
      return classNames(classes.ripple, {
        [classes.rippleVisible]: rippleVisible,
        [classes.rippleFast]: pulsate
      });
    },
    rippleStyles: () => {
      const { rippleSize, rippleY, rippleX } = props;
      return {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / division) + rippleY,
        left: -(rippleSize / division) + rippleX
      };
    }
  };
};
