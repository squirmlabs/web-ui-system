import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../rsg-components/Styled';

// Import default implementation from react-styleguidist using the full path
import DefaultRenderer from '../rsg-components/Pathline/PathlineRenderer';
const styles = ({ space, fontFamily, fontSize, color }) => ({
	pathline: {
		fontFamily: fontFamily.monospace,
		fontSize: fontSize.small,
		color: color.light,
	},
	copyButton: {
		marginLeft: space[0],
	},
});
export function PathlineRenderer(props) {
  const { children } = props;
  return <DefaultRenderer>{children}</DefaultRenderer>;
}

PathlineRenderer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default Styled(styles)(PathlineRenderer);
