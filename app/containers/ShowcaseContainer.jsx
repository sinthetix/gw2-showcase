import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        created: (response.data.created).replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):\d+Z/, '$1-$2-$3 $4:$5 UTC'),
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
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <Account name={ this.state.name } created={ this.state.created } isLoading={ this.state.isLoadingAccount } />
          </div>
          <div className='col-md-3'></div>
        </div>
        <div className='row'>
          <Characters accountKey={ this.props.params.accountKey } characters={ this.state.characters } />
        </div>
      </div>
    );
  }
}

ShowcaseContainer.propTypes = {
  // params && params.accountKey
};
