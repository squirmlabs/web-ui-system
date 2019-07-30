export const styles = theme => ({
  docked: {
    flex: '0 0 auto',
    'margin-top': '60px',
  },
  paper: {
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    flex: '1 0 auto',
    zIndex: theme.zIndex.drawer,
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    // temporary style
    position: 'fixed',
    top: 0,
    // We disable the focus ring for mouse, touch and keyboard users.
    // At some point, it would be better to keep it for keyboard users.
    // :focus-ring CSS pseudo-class will help.
    '&:focus': {
      outline: 'none',
    },
  },
  paperAnchorLeft: {
    left: 0,
    right: 'auto',
  },
  paperAnchorRight: {
    left: 'auto',
    right: 0,
  },
  paperAnchorTop: {
    top: 0,
    left: 0,
    bottom: 'auto',
    right: 0,
    height: 'auto',
    maxHeight: '100vh',
  },
  paperAnchorBottom: {
    top: 'auto',
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    maxHeight: '100vh',
  },
  paperAnchorDockedLeft: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  paperAnchorDockedTop: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  paperAnchorDockedRight: {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  paperAnchorDockedBottom: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  modal: {}, // Just here so people can override the style.
});
