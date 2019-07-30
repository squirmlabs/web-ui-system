import PropTypes from 'prop-types';
import React from 'react';
import availableAgents from './availableAgents';

const UA = ({ children, returnfullParser, ...props }, { ua }) => {
  // Map providedUA(s) to availableAgents and set value to true
  const validAgents = Object.keys(props).filter(prop => availableAgents.includes(prop));

  // Boolean for
  const isUAProvided = validAgents.some(prop => ua.uaResults[prop]);

  // Are children typeof function
  const funcChildren = typeof children === 'function';

  // If we set valid user agents to component
  if (validAgents.length !== 0) {
    // If children are typeof function
    // pass
    if (funcChildren) {
      return children(isUAProvided);
    }

    // If
    if (isUAProvided) {
      return children;
    }
    return null;
  }

  // Children are typeof function
  if (funcChildren) {
    if (returnfullParser) {
      return children(ua.parser);
    }
    return children(ua.uaResults);
  }

  if (process.env.NODE_ENV !== 'production') {
    throw new Error('UA should be used with a function as a child when used without any props');
  }
  return null;
};

if (process.env.NODE_ENV !== 'production') {
  // Create proptypes for all availableAgents
  UA.propTypes = {
    ...availableAgents.reduce((acc, cur) => ({ ...acc, [cur]: PropTypes.bool }), {}),
    returnfullParser: PropTypes.bool
  };
}

UA.defaultProps = {
  returnfullParser: false
};

// If contextTypes.ua is not defined, then ua will be undefined
UA.contextTypes = {
  ua: PropTypes.object
};

export default UA;
