import React from 'react';
import classNames from 'classnames';
import withStyles from '@symbols/core//withStyles';
import { capitalize } from '@symbols/core/helpers';
import { defaultProps, propTypes } from './propTypes';
import { styles } from './styles';

function Typography(props) {
  const {
    align,
    classes,
    className: classNameProp,
    component: componentProp,
    color,
    gutterBottom,
    headlineMapping,
    noWrap,
    paragraph,
    variant,
    ...other
  } = props;

  const className = classNames(
    classes.root,
    classes[variant],
    {
      [classes[`color${capitalize(color)}`]]: color !== 'default',
      [classes.noWrap]: noWrap,
      [classes.gutterBottom]: gutterBottom,
      [classes.paragraph]: paragraph,
      [classes[`align${capitalize(align)}`]]: align !== 'inherit'
    },
    classNameProp
  );

  const Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';

  return <Component className={className} {...other} />;
}

Typography.propTypes = propTypes;

Typography.defaultProps = defaultProps;

export default withStyles(styles, { name: 'UITypography' })(Typography);
