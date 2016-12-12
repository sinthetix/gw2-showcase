import React, { PropTypes } from 'react';

const KeyEntry = (props) => {
  <textarea onChange={this.props.setAccountKey} placeholder="Please enter a valid API key." />
};

KeyEntry.propTypes = {
  setAccountKey: PropTypes.func,
}

export default KeyEntry;
