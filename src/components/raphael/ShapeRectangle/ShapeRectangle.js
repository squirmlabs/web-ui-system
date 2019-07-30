import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Set, Rect } from 'react-raphael';
import { paper, rectangle } from './data';

const { bool, string } = PropTypes;

export default function ShapeRectangle(props) {
  return (
    <Paper {...paper}>
      <Set>
        <Rect {...rectangle} />
      </Set>
    </Paper>
  );
}

ShapeRectangle.propTypes = {
  /** Description of prop "content". */
  content: string,
  /** Description of prop "primary". */
  primary: bool,
  /** Description of prop "secondary". */
  secondary: bool
};
