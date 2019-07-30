import React from 'react';
import PropTypes from 'prop-types';
import Slot from 'rsg-components/Slot';
import SectionHeadingRenderer from 'rsg-components/SectionHeading/SectionHeadingRenderer';
import getUrl from '../../utils/getUrl';

export default function SectionHeading({
  slotName,
  slotProps,
  children,
  id,
  pagePerSection,
  ...rest
}) {
  const href = pagePerSection
    ? getUrl({ slug: id, id: rest.depth !== 1, takeHash: true })
    : getUrl({ slug: id, anchor: true });
  return (
    <SectionHeadingRenderer
      toolbar={<Slot name={slotName} props={slotProps} />}
      id={id}
      href={href}
      {...rest}
    >
      {children}
    </SectionHeadingRenderer>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.node,
  deprecated: PropTypes.bool,
  depth: PropTypes.number,
  id: PropTypes.string,
  pagePerSection: PropTypes.bool,
  slotName: PropTypes.string,
  slotProps: PropTypes.object,
  // depth: PropTypes.number.isRequired,
  // id: PropTypes.string.isRequired,
  // pagePerSection: PropTypes.bool,
  // slotName: PropTypes.string.isRequired,
  // slotProps: PropTypes.object.isRequired,
};
