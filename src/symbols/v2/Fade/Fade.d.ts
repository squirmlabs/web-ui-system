import * as React from 'react';
import { Theme } from '../styles/createSSTheme';
import { TransitionProps } from '../transitions/transition';

export interface FadeProps extends TransitionProps {
  theme?: Theme;
}

declare const Fade: React.ComponentType<FadeProps>;

export default Fade;
