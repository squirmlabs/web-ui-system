import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ReportProblem = props =>
  <SvgIconCustom {...props}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </SvgIconCustom>;

ReportProblem = pure(ReportProblem);
ReportProblem.uiName = 'SvgIcon';

export default ReportProblem;
