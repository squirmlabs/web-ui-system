import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let FolderOpen = props =>
  <SvgIconCustom {...props}>
    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
  </SvgIconCustom>;

FolderOpen = pure(FolderOpen);
FolderOpen.uiName = 'SvgIcon';

export default FolderOpen;
