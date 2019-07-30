import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../rsg-components/Styled';
import Heading from '../rsg-components/Heading';

// Import default implementation from react-styleguidist using the full path
import DefaultRenderer from '../rsg-components/Heading/HeadingRenderer';

const styles = ({ fontFamily, color, space }) => ({
  headingSpacer: {
    marginBottom: space[2]
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base
  }
});

export function HeadingRenderer(props) {
  const { classes, children } = props;
  return (
    <div className={classes.headingSpacer}>
      <DefaultRenderer {...props}>{children}</DefaultRenderer>
    </div>
  );
}

HeadingRenderer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default Styled(styles)(HeadingRenderer);
