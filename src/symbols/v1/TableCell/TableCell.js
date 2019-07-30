import React from 'react';

import withStyles from '@symbols/core//withStyles';
import { styles } from './styles';
import { className } from './className';
import { propTypes, defaultProps, contextTypes } from './propTypes';

function TableCell(props, context) {
  const {
    children,
    classes,
    className: classNameProp,
    component,
    sortDirection,
    numeric,
    padding: paddingProp,
    scope: scopeProp,
    variant,
    ...other
  } = props;

  const { table, tablelvl2 } = context;

  // Table Component
  let Component;
  if (component) {
    Component = component;
  } else {
    Component = tablelvl2 && tablelvl2.variant === 'head' ? 'th' : 'td';
  }

  // Scope
  let scope = scopeProp;
  if (!scope && tablelvl2 && tablelvl2.variant === 'head') {
    scope = 'col';
  }
  // Padding
  const padding = paddingProp || (table && table.padding ? table.padding : 'default');

  // Sort
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return (
    <Component className={className(classes, classNameProp, numeric, padding, tablelvl2, variant)} aria-sort={ariaSort} scope={scope} {...other}>
      {children}
    </Component>
  );
}

TableCell.propTypes = propTypes;

TableCell.defaultProps = defaultProps;

TableCell.contextTypes = contextTypes;

export default withStyles(styles, { name: 'UI-Symbol-TableCell' })(TableCell);
