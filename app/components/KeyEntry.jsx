import React, { PropTypes, Component } from 'react';

class KeyEntry extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <textarea onChange={this.props.setAccountKey} placeholder="Please enter a valid API key." />
  );
 }
};

KeyEntry.propTypes = {
  setAccountKey: PropTypes.func.isRequired,
}

export default KeyEntry;
