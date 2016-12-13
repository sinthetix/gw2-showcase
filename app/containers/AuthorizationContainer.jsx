import React, { Component, PropTypes } from 'react';
import AuthForm from '../components/AuthForm';
import KeyEntry from '../components/KeyEntry';
import KeyValidator from '../components/KeyValidator';
import SubmitKey from '../components/SubmitKey';
import { getPermissions } from '../utils/API';

export default class AuthorizationContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      accountKey: '',
      badKey: true,
      isLoading: false,
    };
    this.setAccountKey = this.setAccountKey.bind(this);
    this.setKeyValidity = this.setKeyValidity.bind(this);
    this.keyLengthValid = this.keyLengthValid.bind(this);
    this.handleSubmitKey = this.handleSubmitKey.bind(this);
  }

  setAccountKey(event) {
    this.setState({ accountKey: event.target.value }, function () {
      this.setKeyValidity();
    });
  }

  setKeyValidity() {
    if (this.keyLengthValid()) {
      this.setState({ isLoading: true });
      this.setState({ badKey: false });
      // check scopes
      // if scopes good, setState badKey to false
      // loading is false
      // if false, loading is false, back to the x
    } else {
      this.setState({ badKey: true });
      this.setState({ isLoading: false });
    }
  }

  keyLengthValid() {
    return this.state.accountKey.length === 72;
  }

  handleSubmitKey(){
    this.context.router.push(`/${this.state.accountKey}`);
  }

  render() {
    return (
      <AuthForm onSubmitKey={ this.handleSubmitKey }>
        <KeyEntry setAccountKey={ this.setAccountKey } />
        <KeyValidator badKey={ this.state.badKey } loadingStatus={ this.state.isLoading } />
        <SubmitKey keyDisabled={ this.state.badKey } />
      </AuthForm>
    );
  }
}

AuthorizationContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
