import React from 'react';
import { bool, func } from 'prop-types';
import KeyboardArrowDown from '@symbols/v1/UIIcons/KeyboardArrowDown';
import Button from './Button';

export const MoveToStoryButton = ({ onClick, showBody }) => {
  return (
    <div className="StandaloneNoteContainer__header--move_button">
      <Button
        disableRipple
        color="secondary"
        variant="raised"
        onClick={onClick}
        size="medium"
        iconRight
        active={showBody}
      >
        Move Note
        <KeyboardArrowDown className={showBody ? 'down-arrow' : 'up-arrow'} />
      </Button>
    </div>
  );
};

MoveToStoryButton.propTypes = {
  onClick: func,
  showBody: bool
};
