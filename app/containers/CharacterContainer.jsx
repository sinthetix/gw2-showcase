import React, { PropTypes, Component } from 'react';
import Account from '../components/Account';
import Character from '../components/Character';
import { getCharacterInfo, getTitle } from '../utils/API';

export default class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.characterName,
      level: 1,
      gender: '',
      race: '',
      profession: '',
      age: 0,
      created: '',
      title: null,
      isLoadingCharacter: true,
    };
    this.getTitleName = this.getTitleName.bind(this);
  }

  componentDidMount() {
    const key = this.props.accountKey;
    getCharacterInfo(key, this.props.characterName)
    .then(response => {
      this.setState({
        name: response.data.name,
        level: response.data.level,
        gender: response.data.gender,
        race: response.data.race,
        profession: response.data.profession,
        age: response.data.age / 24 / 60 / 60,
        created: response.data.created,
        // equipment: {},
        // skills: {},
        // specializations: {},
        // equipment
        // skills
        // specializations
      });

      this.getTitleName(response.data.title);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }

  getTitleName(id){
    if (id !== undefined) {
      getTitle(id)
      .then((response) => {
        this.setState({
          title: response.data.name,
        });
      })
      .catch((error) => {
        console.log('Error getting title:', error);
      });
    } else {
      this.setState({
        title: ''
      })
    }
  }

  render() {
    return (
      <div>
        <Character
          name={ this.state.name }
          level={ this.state.level }
          gender={ this.state.gender }
          race={ this.state.race }
          profession={ this.state.profession }
          age={ this.state.age }
          created={ this.state.created }
          title={ this.state.title }
          isLoading={ this.state.isLoadingCharacter }
        />
      </div>
    )
   }
 }
