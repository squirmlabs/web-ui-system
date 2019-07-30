import * as React from 'react';
import { Theme } from '../styles/createSSTheme';
import { TransitionProps } from '../transitions/transition';

export interface SlideProps extends TransitionProps {
  direction: 'left' | 'right' | 'up' | 'down';
  theme?: Theme;
}

declare const Slide: React.ComponentType<SlideProps>;

export default Slide;
