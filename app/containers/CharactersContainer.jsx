import React, { Component, PropTypes } from 'react';
import { getCharacterInfo } from '../utils/API';

export default class CharactersContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { }
  }
  render() {
    return null;
    // characters.map { <Character props={all the char info} />}
  }
};

CharactersContainer.propTypes = {
  accountKey: PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired,
}
