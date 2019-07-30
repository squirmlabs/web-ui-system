import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

function createSvgIcon(path, displayName) {
  let Icon = props => (
    <SvgIcon {...props}>
      {path}
    </SvgIcon>
  );

  Icon.displayName = displayName;
  Icon = pure(Icon);
  Icon.uiName = 'SvgIcon';

  return Icon;
};

export default createSvgIcon;
