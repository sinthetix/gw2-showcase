import React, { PropTypes } from 'react';

const Account = (props) => {
  return props.isLoading === true
    ? <img src='./svg/loading.svg' alt='Loading...' />
    : <ul>
        <li>Account: {props.name}</li>
        <li>Created: {props.created}</li>
       </ul>
  }

Account.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default Account;
