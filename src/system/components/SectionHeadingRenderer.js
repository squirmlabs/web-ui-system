import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../rsg-components/Styled';
import Heading from '../rsg-components/Heading';

// Import default implementation from react-styleguidist using the full path
import DefaultRenderer from '../rsg-components/SectionHeading/SectionHeadingRenderer';

const styles = ({ color, space }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: space[1]
  },
  toolbar: {
    marginLeft: 'auto'
  },
  sectionName: {
    '&:hover, &:active': {
      isolate: false,
      textDecoration: 'underline',
      cursor: 'pointer',
      
    }
  },
  isDeprecated: {
    color: color.light,
    '&, &:hover': {
      textDecoration: 'line-through'
    }
  }
});

export function HeadingRenderer(props) {
  const { classes, children } = props;
  return <DefaultRenderer>{children}</DefaultRenderer>;
}

HeadingRenderer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default Styled(styles)(HeadingRenderer);
