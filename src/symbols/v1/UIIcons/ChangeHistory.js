import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ChangeHistory = props =>
  <SvgIconCustom {...props}>
    <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
  </SvgIconCustom>;

ChangeHistory = pure(ChangeHistory);
ChangeHistory.uiName = 'SvgIcon';

export default ChangeHistory;
