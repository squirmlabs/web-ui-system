import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../rsg-components/Styled';

// Import default implementation from react-styleguidist using the full path
import DefaultSections from '../rsg-components/Sections/SectionsRenderer';

const styles = ({ fontFamily, color, space }) => ({
  headingSpacer: {
    marginBottom: space[2]
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base
  }
});

export function SectionsRenderer({ classes, children }) {
  return (
    <div>
      <DefaultSections>{children}</DefaultSections>
    </div>
  );
}

SectionsRenderer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default Styled(styles)(SectionsRenderer);
