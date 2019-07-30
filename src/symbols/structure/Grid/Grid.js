import React from 'react';
import classNames from 'classnames';
import withStyles from '@symbols/core/withStyles';
import requirePropFactory from '@symbols/core/requirePropFactory';
import { propTypes } from './propTypes';
import { styles } from './styles';

function Grid(props) {
  const {
    alignContent,
    alignItems,
    classes,
    className: classNameProp,
    component: Component,
    container,
    direction,
    item,
    justify,
    lg,
    md,
    sm,
    spacing,
    wrap,
    xl,
    xs,
    zeroMinWidth,
    ...other
  } = props;

  const className = classNames(
    {
      [classes.container]: container,
      [classes.item]: item,
      [classes.zeroMinWidth]: zeroMinWidth,
      [classes[`spacing-xs-${String(spacing)}`]]: container && spacing !== 0,
      [classes[`direction-xs-${String(direction)}`]]: direction !== Grid.defaultProps.direction,
      [classes[`wrap-xs-${String(wrap)}`]]: wrap !== Grid.defaultProps.wrap,
      [classes[`align-items-xs-${String(alignItems)}`]]:
        alignItems !== Grid.defaultProps.alignItems,
      [classes[`align-content-xs-${String(alignContent)}`]]:
        alignContent !== Grid.defaultProps.alignContent,
      [classes[`justify-xs-${String(justify)}`]]: justify !== Grid.defaultProps.justify,
      [classes[`grid-xs-${String(xs)}`]]: xs !== false,
      [classes[`grid-sm-${String(sm)}`]]: sm !== false,
      [classes[`grid-md-${String(md)}`]]: md !== false,
      [classes[`grid-lg-${String(lg)}`]]: lg !== false,
      [classes[`grid-xl-${String(xl)}`]]: xl !== false
    },
    classNameProp
  );

  return <Component className={className} {...other} />;
}

Grid.propTypes = propTypes;

Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  spacing: 0,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false
};

const StyledGrid = withStyles(styles, { name: 'UIGrid' })(Grid);

if (process.env.NODE_ENV !== 'production') {
  const requireProp = requirePropFactory('Grid');
  StyledGrid.propTypes = {
    ...StyledGrid.propTypes,
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('zeroMinWidth')
  };
}

export default StyledGrid;
