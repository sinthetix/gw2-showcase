import React, { PropTypes } from 'react';

const Character = (props) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">
        <img src={'../img/' + props.profession + '.png'} alt={props.profession} />
        &nbsp; {props.name} &nbsp;
        <span className='label label-default'>{ props.level }</span>&nbsp;
      </h3>
    </div>
    <div className="panel-body">
      <ul>
        <li>Title: { props.title  || 'None' }</li>
        <li>Race: {props.race}</li>
        <li>Gender: {props.gender}</li>
        <li>Age: {props.age}</li>
        <li>Created: {props.created}</li>
      </ul>
    </div>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Character;
