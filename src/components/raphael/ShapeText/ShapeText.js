import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Set, Text } from 'react-raphael';
import { paper, text } from './data';

const { bool, string } = PropTypes;

export default function ShapeText(props) {
  return (
    <Paper {...paper}>
      <Set>
        <Text {...text} />
      </Set>
    </Paper>
  );
}

ShapeText.propTypes = {
  /** Description of prop "content". */
  content: string,
  /** Description of prop "primary". */
  primary: bool,
  /** Description of prop "secondary". */
  secondary: bool
};
