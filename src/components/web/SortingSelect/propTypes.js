import { object, number, func, string } from 'prop-types';

export const propTypes = {
  classes: object.isRequired
};
export const enhancedTableHeadProptypes = {
  numSelected: number.isRequired,
  onRequestSort: func.isRequired,
  onSelectAllClick: func.isRequired,
  order: string.isRequired,
  orderBy: string.isRequired,
  rowCount: number.isRequired
};
export const enhancedTableToolbarProptypes = {
  classes: object.isRequired,
  numSelected: number.isRequired
};
