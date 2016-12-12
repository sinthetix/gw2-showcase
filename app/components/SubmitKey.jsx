import React, { PropTypes, Component } from 'react';

const SubmitKey = (props) => {
  <button disabled={props.disabled} type="submit">Submit</button>
};

SubmitKey.propTypes = {
  keyDisabled: PropTypes.bool.isRequired,
};

export default SubmitKey;

// props validKey
// button disabled opposite of {this.props.validKey}
// onSubmit should probably go in the form tag, so we'd need a wrapper component
// and that component gets the on submit.
// the wrapper then takes {props.children}
