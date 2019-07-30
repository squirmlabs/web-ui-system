import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '../Heading';
import Styled from '../Styled';

function SectionHeadingRenderer(props) {
  const { classes, children, toolbar, id, href, depth, deprecated } = props;
  const headingLevel = Math.min(6, depth) || 1;
  const sectionNameClasses = cx(classes.sectionName, {
    [classes.isDeprecated]: deprecated
  });

  return (
    <div className={classes.wrapper}>
      <Heading level={headingLevel} id={id}>
        <a href={href} className={sectionNameClasses}>
          {children}
        </a>
      </Heading>
      <div className={classes.toolbar}>{toolbar}</div>
    </div>
  );
}

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
    fontSize: '24px',
    '&:hover, &:active': {
      isolate: false,
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  isDeprecated: {
    color: color.light,
    '&, &:hover': {
      textDecoration: 'line-through'
    }
  }
});

SectionHeadingRenderer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  deprecated: PropTypes.bool,
  depth: PropTypes.number,
  // depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  // href: PropTypes.string.isRequired,
  id: PropTypes.string,
  // id: PropTypes.string.isRequired,
  toolbar: PropTypes.node
};

export default Styled(styles)(SectionHeadingRenderer);
