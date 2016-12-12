import React, { PropTypes, Component } from 'react';

class KeyValidator extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return null;
  }
};

KeyValidator.propTypes = {
  badKey: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
};

export default KeyValidator;
// can probably be a stateless component function

/*
this needs to be jsx-ified
if(this.props.loadingStatus == false && this.props.badKey == true) {
    console.log('red x');
} else if (this.props.loadingStatus == false && this.props.badKey == false) {
    console.log('green check');
} else {
  console.log('loading');
}

*/
