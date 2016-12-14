import React, { Component, PropTypes } from 'react';
import CharacterContainer from '../containers/CharacterContainer';

export default class Characters extends Component {
  render(){
    return (
      <div>
       <p>My Characters:</p>
        { this.props.characters.map((character) => {
          return <CharacterContainer key={ character } characterName={ character } accountKey={ this.props.accountKey } />;
        })
      }
      </div>
    )
  }
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
};
