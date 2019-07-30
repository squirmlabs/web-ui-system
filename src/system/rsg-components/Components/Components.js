import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../ReactComponent';
import ComponentsRenderer from './ComponentsRenderer';

export default function Components({ components, depth, exampleMode, usageMode }) {
	return (
		<ComponentsRenderer>
			{components.map(component => (
				<ReactComponent
					key={component.filepath}
					component={component}
					exampleMode="expand"
					usageMode={usageMode}
					depth={depth}
				/>
			))}
		</ComponentsRenderer>
	);
}

Components.propTypes = {
	components: PropTypes.array.isRequired,
	depth: PropTypes.number.isRequired,
	exampleMode: PropTypes.string.isRequired,
	usageMode: PropTypes.string.isRequired,
};
