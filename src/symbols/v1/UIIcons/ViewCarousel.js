import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ViewCarousel = props =>
  <SvgIconCustom {...props}>
    <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
  </SvgIconCustom>;

ViewCarousel = pure(ViewCarousel);
ViewCarousel.uiName = 'SvgIcon';

export default ViewCarousel;
