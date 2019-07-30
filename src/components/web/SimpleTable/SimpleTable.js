
import React from 'react';
import withStyles from '@symbols/core/withStyles';
import Table from '@symbols/v1/Table';
import TableBody from '@symbols/v1/TableBody';
import TableCell from '@symbols/v1/TableCell';
import TableHead from '@symbols/v1/TableHead';
import TableRow from '@symbols/v1/TableRow';
import Paper from '@symbols/v1/Paper';
import { styles } from './styles';
import { rows } from './createData';
import { propTypes } from './propTypes';

function SimpleTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
            <TableCell numeric>Fat (g)</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = propTypes;

export default withStyles(styles)(SimpleTable);
