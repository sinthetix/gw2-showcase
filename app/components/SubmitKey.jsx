import React, { PropTypes, Component } from 'react';

export default class SubmitKey extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (<button disabled={this.props.keyDisabled} type="submit">Submit</button>);
  }
};

SubmitKey.propTypes = {
  keyDisabled: PropTypes.bool.isRequired,
};

// props validKey
// button disabled opposite of {this.props.validKey}
// onSubmit should probably go in the form tag, so we'd need a wrapper component
// and that component gets the on submit.
// the wrapper then takes {props.children}
