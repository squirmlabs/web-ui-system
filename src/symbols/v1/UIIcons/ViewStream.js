import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ViewStream = props =>
  <SvgIconCustom {...props}>
    <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" />
  </SvgIconCustom>;

ViewStream = pure(ViewStream);
ViewStream.uiName = 'SvgIcon';

export default ViewStream;
