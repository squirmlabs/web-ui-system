import { fade } from '@symbols/core/colorManipulator';
import { hexToRGB } from '@symbols/core/colors/utils/hexToRGB';

export const styles = (theme) => {
  const trns = theme.transitions.create(['background-color', 'box-shadow'], {
    duration: theme.transitions.duration.shortest
  });
  const activePadding = `6px ${theme.spacing.unit * 2}px 5px`;
  const sizeSmallPadding = `${theme.spacing.unit - 6}px ${theme.spacing.unit - 1}px ${theme.spacing
    .unit - 6}px ${theme.spacing.unit + 5}px`;
  const sizeLargPadding = `${theme.spacing.unit - 2}px 45px ${theme.spacing.unit - 3}px`;
  const twoFacedPadding = `6px ${theme.spacing.unit * 2}px 5px`;
  const iconLeftPadding = `4px 12px 3px ${theme.spacing.unit}px`;
  const iconRightPadding = `4px ${theme.spacing.unit}px 3px 12px`;
  const raisedSecondaryPadding = `6px ${theme.spacing.unit * 2}px 5px`;
  const rootPadding = `${theme.spacing.unit - 2}px ${theme.spacing.unit * 2}px ${theme.spacing
    .unit - 3}px`;
  return {
    root: {
      ...theme.typography.button,
      lineHeight: '1.5em',
      boxSizing: 'border-box',
      minHeight: 31,
      padding: `${rootPadding}`,
      borderRadius: 2,
      color: '#ffffff',
      // transition: theme.transitions.create(['background-color', 'box-shadow'], {
      //   duration: theme.transitions.duration.short
      // }),
      transition: 'all 150ms ease',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: fade(theme.palette.text.primary, 0.12),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&:focus': {
        outline: 'none',
        boxShadow: theme.shadows[1],
      }
    },
    link: {
      ...theme.typography.link,
      lineHeight: '1.5em',
      boxSizing: 'border-box',
      color: theme.palette.text.link,
      '&:hover': {
        textDecoration: 'none',
        color: '#264C87'
      },
      '&:focus': {
        outline: 'none',
        boxShadow: 'none'
      }
    },
    label: {
      width: '100%',
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    flatPrimary: {
      color: '#ffffff',
      backgroundColor: '#30A88F',
      borderColor: '#2D8E7C',
      border: 'solid 1px',
      '&:hover': {
        backgroundColor: fade('#30A88F', 0.8)
      }
    },
    flatSecondary: {
      color: '#30A88F',
      backgroundColor: '#F5F7F9',
      borderColor: '#40AE98',
      border: 'solid 1px',
      '&:hover': {
        backgroundColor: fade('#F5F7F9', 0.1),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    colorInherit: {
      color: 'inherit'
    },
    keyboardFocused: {},
    raisedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    raisedSecondary: {
      color: '#30A88F',
      backgroundColor: '#F5F7F9',
      borderColor: '#40AE98',
      border: 'solid 1px',
      lineHeight: '1.3em',
      boxSizing: 'border-box',
      minHeight: 31,
      maxHeight: 31,
      minWidth: '80px',
      padding: `${raisedSecondaryPadding}`,
      borderRadius: 40,
      boxShadow: theme.shadows[1],
      // transition: theme.transitions.create(['background-color', 'box-shadow'], {
      //   duration: theme.transitions.duration.shortest
      // }),
      transition:
        'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: fade(theme.palette.text.primary, 0.12),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          fontWeight: 400,
          backgroundColor: 'transparent'
        }
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 5px ${hexToRGB('#40AE98', 0.7)}`
      }
    },
    active: {
      color: '#27416B',
      backgroundColor: '#F5F7F9',
      borderColor: '#213B66',
      border: 'solid 1px',
      fontWeight: 600,
      minHeight: 31,
      maxHeight: 31,
      boxShadow: theme.shadows[1],
      padding: `${activePadding}`,
      borderRadius: 40,
      transition: theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: fade('#F5F7F9', 0.12),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 5px ${hexToRGB('#27416B', 0.7)}`
      }
    },
    iconLeft: { padding: `${iconLeftPadding}` },
    iconRight: { padding: `${iconRightPadding}` },
    disabled: {
      color: '#B4B4B4',
      boxShadow: theme.shadows[0],
      backgroundColor: '#F4F4F4',
      borderColor: '#E3E3E3',
      border: 'solid 1px'
    },
    twoFaced: {
      color: '#666',
      border: 'none',
      padding: '0px',
      minWidth: '50px',
      boxShadow: 'none',
      boxSizing: 'border-box',
      maxHeight: '31px',
      minHeight: '31px',
      lineHeight: '1.3em',
      borderColor: '#40AE98',
      borderRadius: '0px',
      backgroundColor: 'transparent',
      '@media (max-width: 812px)': {
        color: '#30A88F',
        border: 'solid 1px',
        padding: `${twoFacedPadding}`,
        minWidth: '145px',
        boxShadow:
          '0px 1px 3px 0px rgba(51, 58, 86, 0.1), 0px 1px 1px 0px rgba(51, 58, 86, 0.14), 0px 2px 1px -1px rgba(51, 58, 86, 0.12)',
        boxSizing: 'border-box',
        transition:
          'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        maxHeight: '31px',
        minHeight: '31px',
        lineHeight: '1.3em',
        borderColor: '#40AE98',
        borderRadius: '40px',
        backgroundColor: '#F5F7F9'
      }
    },
    twoFacedOpposite: {
      color: '#30A88F',
      border: 'solid 1px',
      padding: `${twoFacedPadding}`,
      minWidth: '145px',
      boxShadow:
        '0px 1px 3px 0px rgba(51, 58, 86, 0.1), 0px 1px 1px 0px rgba(51, 58, 86, 0.14), 0px 2px 1px -1px rgba(51, 58, 86, 0.12)',
      boxSizing: 'border-box',
      transition:
        'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      maxHeight: '31px',
      minHeight: '31px',
      lineHeight: '1.3em',
      borderColor: '#40AE98',
      borderRadius: '40px',
      backgroundColor: '#F5F7F9',
      '@media (max-width: 812px)': {
        color: '#939393',
        border: 'none',
        padding: '0px',
        minWidth: '100px',
        boxShadow: 'none',
        boxSizing: 'border-box',
        maxHeight: '31px',
        minHeight: '31px',
        lineHeight: '1.3em',
        borderColor: '#40AE98',
        borderRadius: '0px',
        backgroundColor: 'transparent'
      }
    },
    mini: {
      width: 40,
      width: 40,
      height: 40
    },
    // sizeSmall: {
    //   padding: `${sizeSmallPadding}`,
    //   minWidth: theme.spacing.unit * 8,
    //   minHeight: 24,
    //   lineHeight: '1em',
    //   fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1)
    // },
    sizeLarge: {
      padding: `${sizeLargPadding}`,
      minHeight: 40,
      fontSize: theme.typography.pxToRem(theme.typography.fontSize + 1),
      '@media (max-width: 812px)': {
        padding: '6px 20px 5px'
      }
    },
    fullWidth: {
      width: '100%'
    },
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      background: '#fff', // only used until color algo is fixed
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12],
      },
      '&:hover': {
        background: '#fff',
      },
    },
    /* Styles applied to the root element if `variant="extendedFab"`. */
    extendedFab: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minWidth: 48,
      height: 48,
    },
    destructive: {
      color: '#B71B1B',
      backgroundColor: '#F5F7F9',
      borderColor: '#B71B1B',
      border: 'solid 1px',
      fontWeight: 600,
      minHeight: 30,
      minWidth: '145px',
      padding: `6px ${theme.spacing.unit * 2}px 5px`,
      borderRadius: 40,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: fade('#F5F7F9', 0.12),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&:focus': {
        outline: 'none',
        boxShadow: '0 0 5px rgba(183, 27, 27, 1)'
      }
    },
  };
};
