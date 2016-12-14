

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
      loadingAnimation: '',
    };
    this.setAccountKey = this.setAccountKey.bind(this);
    this.setKeyValidity = this.setKeyValidity.bind(this);
    this.keyLengthValid = this.keyLengthValid.bind(this);
    this.handleSubmitKey = this.handleSubmitKey.bind(this);
    this.hasRightScopes = this.hasRightScopes.bind(this);
  }

  setAccountKey(event) {
    this.setState({ accountKey: event.target.value }, function () {
      this.setKeyValidity();
    });
  }

  setKeyValidity() {
    console.log('Checking key validity!')
    const key = this.state.accountKey
    if (this.keyLengthValid()) {
      console.log('Key is valid length!')
      this.setState({ loadingAnimation: 'animated infinite pulse' });
      getPermissions(key)
      .then(response => {
        console.log('Handling the response!');
        const scopes = response.data.permissions;
        this.hasRightScopes(scopes);
      })
      .catch(error => {
        console.log('Error:', error);
      });
    } else {
      this.setState({ badKey: true });
      this.setState({ loadingAnimation: '' });
    }
  }

  hasRightScopes(scopes) {
      if (scopes.includes('account','progression','build','characters')) {
        this.setState({ loadingAnimation: '', badKey: false});
        console.log('Key has right scopes!');
      } else {
        this.setState({ loadingAnimation: '' , badKey: true});
        console.log('Scopes failed!');
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
        <KeyValidator badKey={ this.state.badKey } loadingAnimation={ this.state.loadingAnimation } />
        <SubmitKey keyDisabled={ this.state.badKey } />
      </AuthForm>
    );
  }
}

AuthorizationContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
