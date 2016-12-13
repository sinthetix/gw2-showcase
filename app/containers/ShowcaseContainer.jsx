import React, { PropTypes, Component } from 'react';
import Account from '../components/Account';
import CharactersContainer from '../containers/CharactersContainer';
import { getAccountInfo, getCharacterList } from '../utils/API';

export default class ShowcaseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      created: '',
      characters: [],
    };
  }

  componentDidMount() {
    const key = this.props.params.accountKey;
    getAccountInfo(key)
    .then(response => {
      this.setState({
        name: response.data.name,
        created: response.data.created,
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
    // need to do a loading thing
  }

  render() {
    return (
      <div>
        <Account name={ this.state.name } created={ this.state.created } />
        <CharactersContainer
          accountKey={ this.props.params.accountKey }
          characters={ this.state.characters }
        />
      </div>
    );
  }
}

ShowcaseContainer.propTypes = {
  // params && params.accountKey
};
