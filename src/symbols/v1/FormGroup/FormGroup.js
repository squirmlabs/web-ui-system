import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@symbols/core//withStyles';

export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: 'row'
  }
};

/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */
function FormGroup(props) {
  const {
    classes, className, children, row, ...other
  } = props;

  return (
    <div
      className={classNames(
        classes.root,
        {
          [classes.row]: row
        },
        className
      )}
      {...other}
    >
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool
};

FormGroup.defaultProps = {
  row: false
};

export default withStyles(styles, { name: 'UIFormGroup' })(FormGroup);
