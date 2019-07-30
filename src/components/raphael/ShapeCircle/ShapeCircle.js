import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Set, Circle } from 'react-raphael';
import { data, paper } from './data';

const { bool, string } = PropTypes;

export default function ShapeCircle(props) {
  return (
    <Paper {...paper}>
      <Set>
        {data.map((ele, pos) => {
          return (
            <Circle key={pos} x={ele.x} y={ele.y} r={ele.r} attr={ele.attr} animate={ele.animate} />
          );
        })}
      </Set>
    </Paper>
  );
}

ShapeCircle.propTypes = {
  /** Description of prop "content". */
  content: string,
  /** Description of prop "primary". */
  primary: bool,
  /** Description of prop "secondary". */
  secondary: bool
};
