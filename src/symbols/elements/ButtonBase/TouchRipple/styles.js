import { DURATION } from './types';

export const styles = (theme) => ({
  root: {
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    pointerEvents: 'none',
    zIndex: 0
  },
  wrapper: {
    opacity: 1
  },
  wrapperLeaving: {
    opacity: 0,
    animation: `ui-ripple-exit ${DURATION}ms ${theme.transitions.easing.easeInOut}`
  },
  wrapperPulsating: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    animation: `ui-ripple-pulsate 2500ms ${theme.transitions.easing.easeInOut} 200ms infinite`
  },
  '@keyframes ui-ripple-enter': {
    '0%': {
      transform: 'scale(0)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  },
  '@keyframes ui-ripple-exit': {
    '0%': {
      opacity: 1
    },
    '100%': {
      opacity: 0
    }
  },
  '@keyframes ui-ripple-pulsate': {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(0.92)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  },
  ripple: {
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    opacity: 0,
    position: 'absolute',
    borderRadius: '50%',
    background: 'currentColor'
  },
  rippleVisible: {
    opacity: 0.3,
    transform: 'scale(1)',
    animation: `ui-ripple-enter ${DURATION}ms ${theme.transitions.easing.easeInOut}`
  },
  rippleFast: {
    animationDuration: '200ms'
  }
});
