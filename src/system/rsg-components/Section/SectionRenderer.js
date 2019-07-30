import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../Styled';
import SectionHeading from '../SectionHeading';
import Markdown from '../Markdown';

const styles = ({ space }) => ({
  root: {
    marginBottom: space[4]
  }
});

export function SectionRenderer(allProps) {
  const {
    classes,
    name,
    slug,
    content,
    components,
    sections,
    depth,
    description,
    pagePerSection
  } = allProps;

  return (
    <section className={classes.root}>
      {name && (
        <SectionHeading
          depth={depth}
          id={slug}
          slotName="sectionToolbar"
          pagePerSection={pagePerSection}
          slotProps={allProps}
        >
          {name}
        </SectionHeading>
      )}
      {description && <Markdown text={description} />}
      {content}
      {sections}
      {components}
    </section>
  );
}

SectionRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  components: PropTypes.node,
  content: PropTypes.node,
  depth: PropTypes.number.isRequired,
  description: PropTypes.string,
  filepath: PropTypes.string,
  isolated: PropTypes.bool,
  name: PropTypes.string,
  pagePerSection: PropTypes.bool,
  sections: PropTypes.node,
  slug: PropTypes.string
};

export default Styled(styles)(SectionRenderer);
