import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

const styles = ({ color, fontFamily, fontSize }) => ({
  logo: {
    color: color.base,
    margin: 0,
    fontFamily: fontFamily.base,
    fontSize: fontSize.h4,
    fontWeight: 'normal'
  }
});

export function LogoRenderer({ classes, children }) {
  return <div className={classes.logo}>{children}</div>;
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Styled(styles)(LogoRenderer);
