import React from 'react';
import PropTypes from 'prop-types';
import Examples from '../Examples';
import Components from '../Components';
import Sections from '../Sections';
import SectionRenderer from '../Section/SectionRenderer';
import { DisplayModes } from '../../consts';

export default function Section({ section, depth }, { displayMode, config: { pagePerSection } }) {
  const {
    name,
    slug,
    filepath,
    content,
    components,
    sections,
    description,
    exampleMode,
    usageMode
  } = section;

  const contentJsx = content && (
    <Examples examples={content} name={name} exampleMode={exampleMode} />
  );
  const componentsJsx = components && (
    <Components
      usageMode={usageMode}
      exampleMode={exampleMode}
      components={components}
      depth={depth + 1}
    />
  );
  const sectionsJsx = sections && <Sections sections={sections} depth={depth + 1} />;

  return (
    <SectionRenderer
      description={description}
      pagePerSection={pagePerSection}
      name={name}
      slug={slug}
      filepath={filepath}
      content={contentJsx}
      components={componentsJsx}
      sections={sectionsJsx}
      isolated={displayMode !== DisplayModes.all}
      depth={depth}
    />
  );
}

Section.propTypes = {
  depth: PropTypes.number.isRequired,
  section: PropTypes.object.isRequired
};

Section.contextTypes = {
  displayMode: PropTypes.string,
  config: PropTypes.object.isRequired
};
