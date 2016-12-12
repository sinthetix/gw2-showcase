import React, { Component, PropTypes } from 'react';
import Router from 'react-router';
import AuthForm from '../components/AuthForm';
import KeyEntry from '../components/KeyEntry';
import KeyValidator from '../components/KeyValidator';
import SubmitKey from '../components/SubmitKey';

class AuthorizationContainer extends Component {
  // I'm not sure what the props are here and what I'd pass to them :X
  constructor(props) {
    super(props);
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
  // setStatusText
  setAccountKey(event) {
    let text = event.target.value;
    this.setState({ accountKey: text })
  }

  setKeyValidity() {
    if (this.keyLengthValid()) {
      this.setState({ isLoading: true })
      // check scopes
      // if scopes good, setState badKey to false
      // loading is false
      // if false, loading is false, back to the x
    }
  }

  keyLengthValid() {
    return this.state.setAccountKey.length == 72;
  }

  handleSubmitKey(){
    this.context.router.push(`/$(this.state.accountKey)`);
  }

  render() {
    return (
      <AuthForm onSubmitKey={ this.handleSubmitKey }>
        <KeyEntry accountKey={ this.setAccountKey } />
        <KeyValidator badKey={ this.state.badKey } loadingStatus={ this.state.isLoading } />
        <SubmitKey keyDisabled={ this.state.badKey } />
      </AuthForm>
    );
  }
};

export default AuthorizationContainer;
