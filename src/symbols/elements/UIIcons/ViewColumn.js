import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ViewColumn = props =>
  <SvgIconCustom {...props}>
    <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" />
  </SvgIconCustom>;

ViewColumn = pure(ViewColumn);
ViewColumn.uiName = 'SvgIcon';

export default ViewColumn;
