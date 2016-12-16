import React, { PropTypes, Component } from 'react';

const KeyValidator = (props) => {
  return props.badKey === true
    ? <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 alert alert-danger text-justify' role='alert'>
          <span className={'glyphicon glyphicon-exclamation-sign' + props.loadingAnimation }  aria-hidden='true'></span>
          &nbsp; We won't get anywhere with a bad key! To get your key, go to <a href='https://account.arena.net/applications' className='alert-link'>the application section of your account page</a>.
          Make sure you have the scopes <em>account</em>, <em>progression</em>, <em>builds</em>, <em>unlocks</em>, and <em>characters</em> for your key or the krewe won't give it the thumbs up! Please note that this application <strong>does not store any of your information</strong> and only returns data when explictly provided a valid account key.
        </div>
        <div className='col-sm-4'></div>
      </div>
    : <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 alert alert-success text-justify' role='alert'>
          <span className='glyphicon glyphicon-heart animated infinite pulse' aria-hidden='true'></span>
          &nbsp;The krewe has confirmed this key is <em>dope</em>!
        </div>
        <div className='col-sm-4'></div>
      </div>
}

export default KeyValidator;

KeyValidator.propTypes = {
  badKey: PropTypes.bool.isRequired,
  loadingAnimation: PropTypes.string,
};
