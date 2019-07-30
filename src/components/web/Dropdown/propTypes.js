import PropTypes from 'prop-types';

export default {
  className: PropTypes.string,
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isOverCharCount: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number
};
