import React, { PropTypes, Component } from 'react';

export default class SubmitKey extends Component {
  render() {
    return (<button disabled={ this.props.keyDisabled } type='submit'>Submit</button>);
  }
}

SubmitKey.propTypes = {
  keyDisabled: PropTypes.bool.isRequired,
};
