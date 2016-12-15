import React, { PropTypes } from 'react';

const Account = (props) => {
  return props.isLoading === true
    ? <p>I can load faster than a Centaur<img src='./svg/loading.svg' alt='Loading...' /></p>
    : <div className='page-header text-center'>
        <h1>{ props.name }</h1>
        <p className='lead'>Grinding since { props.created }!</p>
      </div>
  }

Account.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default Account;
