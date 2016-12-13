import React, { PropTypes, Component } from 'react';

export default class AuthForm extends Component {
  render() {
    return (
      <form onSubmit={ this.props.onSubmitKey }>
        {this.props.children}
      </form>
    );
  }
}

AuthForm.propTypes = {
  onSubmitKey: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element),
};
