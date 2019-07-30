import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Set, Ellipse } from 'react-raphael';
import { ellipse, paper } from './data';

const { bool, string } = PropTypes;

export default function ShapeEllipse(props) {
  return (
    <Paper {...paper}>
      <Set>
        <Ellipse {...ellipse} />
      </Set>
    </Paper>
  );
}

ShapeEllipse.propTypes = {
  /** Description of prop "content". */
  content: string,
  /** Description of prop "primary". */
  primary: bool,
  /** Description of prop "secondary". */
  secondary: bool
};
