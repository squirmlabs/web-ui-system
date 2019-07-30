import React, { Component } from 'react';
import Styled from '../rsg-components/Styled';

const styles = ({
  space, fontFamily, fontSize, color
}) => ({
  buttonRow: {
    '& .buttonGrid': {
      display: 'flex',
      flexDirection: 'row',
    },
        '& .buttonCell': {
          margin: '5px'
        }
  }
});
export function Wrapper({ children, classes }) {
  return <div className={classes.buttonRow}>{children}</div>;
}
export default Styled(styles)(Wrapper);
