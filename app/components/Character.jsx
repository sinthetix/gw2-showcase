import React, { PropTypes } from 'react';

const Character = (props) => {
  return props.isLoading === true
    ? <p>I can load faster than a Centaur<img src='./svg/loading.svg' alt='Loading...' /></p>
    : <div className='panel panel-default animated zoomIn'>
        <div className='panel-heading'>
          <h3 className='panel-title text-center'>
            <img src={'../img/' + props.profession + '.png'} alt={props.profession} />
            &nbsp; {props.name} &nbsp;
            <span className='label label-default'>{ props.level }</span>&nbsp;
          </h3>
        </div>
        <div className='panel-body'>
          <dl className='text-center'>
            <dt>Slaying Dragons Since:</dt>
            <dd>{props.created}</dd>
            <dt>Runs Around Tyria As:</dt>
            <dd>A {props.gender} {props.race}</dd>
            <dt>Put To The Grind For:</dt>
            <dd>{props.age} Hours</dd>
            <dt>Also Responds To:</dt>
            <dd>{ props.title  || 'Nothing Else!' }</dd>
          </dl>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h4 className='panel-title text-center'>✨ Shinies! ✨</h4>
            </div>
            <div className='panel-body shiny-height'>{ props.children }</div>
          </div>
        </div>
      </div>
};

Character.propTypes = {
  isLoading: PropTypes.bool.isRequired,
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
