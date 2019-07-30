import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import SectionsRenderer from '../Sections/SectionsRenderer';

export default function Sections({ sections, depth }) {
	return (
		<SectionsRenderer>
			{sections.map((section, idx) => <Section key={idx} section={section} depth={depth} />)}
		</SectionsRenderer>
	);
}

Sections.propTypes = {
	sections: PropTypes.array.isRequired,
	root: PropTypes.bool,
	depth: PropTypes.number.isRequired,
};
