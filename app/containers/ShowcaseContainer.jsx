import React, { PropTypes, Component } from 'react';
import Account from '../components/Account';
import Characters from '../components/Characters';
import { getAccountInfo, getCharacterList } from '../utils/API';

export default class ShowcaseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingAccount: true,
      name: '',
      created: '',
      characters: [],
    };
  }

  componentDidMount() {
    const key = this.props.params.accountKey;
    getAccountInfo(key)
    .then((response) => {
      this.setState({
        name: response.data.name,
        created: response.data.created,
        isLoadingAccount: false,
      });
    })
    .catch((error) => {
      console.log('Error:', error);
    });

    getCharacterList(key)
    .then((response) => {
      this.setState({
        characters: response.data,
      });
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }

  render() {
    return (
      <div>
        <Account name={ this.state.name } created={ this.state.created } isLoading={ this.state.isLoadingAccount } />
        <Characters accountKey={ this.props.params.accountKey } characters={ this.state.characters } />
      </div>
    );
  }
}

ShowcaseContainer.propTypes = {
  // params && params.accountKey
};
