// calls all the api calls.
// renders the component with the props from the state
// <Account />
// characters.map { <Character props={all the char info} />}
import React, { Component, PropTypes } from 'react';

export default class ShowcaseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      created: '',
      characters: [],
    }
  }
  componentDidMount() {
    // API calls and processing goes here
  }
  render() {
    return (
      <div>
        <Account name={ this.state.name } created={ this.state.created } />
        <CharactersContainer characters={ this.state.characters } />
      </div>
    );
  }
}

ShowcaseContainer.propTypes = {
};
