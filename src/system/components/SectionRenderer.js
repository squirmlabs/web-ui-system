import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../rsg-components/Styled';
import Heading from '../rsg-components/Heading';

// Import default implementation from react-styleguidist using the full path
import DefaultRenderer from '../rsg-components/Section/SectionRenderer';

const styles = ({ fontFamily, color, space }) => ({
  headingSpacer: {
    marginBottom: space[2]
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base
  }
});

export function SectionRenderer({ classes, children, ...rest }) {
  return (
    <div className={classes.headingSpacer}>
      <DefaultRenderer {...rest}>{children}</DefaultRenderer>
    </div>
  );
}

SectionRenderer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default Styled(styles)(SectionRenderer);
