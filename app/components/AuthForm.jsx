import React, { PropTypes, Component } from 'react';

export default class AuthForm extends Component {
  // doesn't work as stateless function, prolly cause top level
  // saying props is undefined
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <form onSubmit={ props.onSubmitKey }>
        {props.children}
      </form>
    );
  }
};

AuthForm.propTypes = {
  onSubmitKey: PropTypes.func,
};
