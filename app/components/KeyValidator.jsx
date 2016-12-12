import React, { PropTypes } from 'react';

const KeyValidator = (props) => {
  if(props.loadingStatus == false && props.badKey == true) {
      console.log('red x');
  } else if (props.loadingStatus == false && props.badKey == false) {
      console.log('green check');
  } else {
    console.log('loading');
  }
};

KeyValidator.propTypes = {
  badKey: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
};

export default KeyValidator;
// can probably be a stateless component function
