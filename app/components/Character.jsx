import React, { PropTypes } from 'react';

const Character = (props) => (
  <ul>
    <li>Name: {props.name}</li>
    <li>Gender: {props.gender}</li>
    <li>Race: {props.race}</li>
    <li>Profession: {props.profession}</li>
    <li>Age: {props.age}</li>
    <li>Created: {props.created}</li>
  </ul>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
};

export default Character;
