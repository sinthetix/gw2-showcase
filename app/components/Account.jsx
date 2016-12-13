import React, { PropTypes } from 'react';

const Account = (props) => (
  <ul>
    <li>Account: {props.name}</li>
    <li>Created: {props.created}</li>
  </ul>
);

Account.propTypes = {
  name: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default Account;
