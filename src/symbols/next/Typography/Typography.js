import React from 'react';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import { propTypes } from './Typography.propTypes';
import defaultProps from './Typography.defaultProps';
import { styles } from './Typography.styles';
import { getVariant } from './Typography.variants';
import { defaultHeadlineMapping } from './Typography.mappings';

function Typography(props) {
  const {
    align,
    classes,
    className: classNameProp,
    color,
    component: componentProp,
    gutterBottom,
    headlineMapping,
    internalDeprecatedVariant,
    noWrap,
    paragraph,
    theme,
    variant: variantProp,
    ...other
  } = props;

  const variant = getVariant(theme, variantProp);
  const className = classNames(
    classes.root,
    {
      [classes[variant]]: variant !== 'inherit',
      [classes[`color${capitalize(color)}`]]: color !== 'default',
      [classes.noWrap]: noWrap,
      [classes.gutterBottom]: gutterBottom,
      [classes.paragraph]: paragraph,
      [classes[`align${capitalize(align)}`]]: align !== 'inherit'
    },
    classNameProp
  );

  const Component =
    componentProp ||
    (paragraph ? 'p' : headlineMapping[variant] || defaultHeadlineMapping[variant]) ||
    'span';

  return <Component className={className} {...other} />;
}

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps(defaultHeadlineMapping);

export default withStyles(styles, { name: 'SSTypography', withTheme: true })(Typography);
