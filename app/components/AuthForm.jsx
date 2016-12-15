import React, { PropTypes, Component } from 'react';

export default class AuthForm extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>GW2 Showcase</h1>
        <p className='text-center lead'>How are you at Fashion Wars 2?</p>
        <form className='form-horizontal' onSubmit={ this.props.onSubmitKey }>
          { this.props.children }
        </form>
      </div>
    );
  }
}

AuthForm.propTypes = {
  onSubmitKey: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element),
};
