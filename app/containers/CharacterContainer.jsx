import React, { PropTypes, Component } from 'react';
import Account from '../components/Account';
import Character from '../components/Character';
import Equipment from '../components/Equipment'
import { getCharacterInfo, getTitle } from '../utils/API';

export default class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingCharacter: true,
      level: 1,
      gender: '',
      race: '',
      profession: '',
      age: 0,
      created: '',
      title: null,
      equipment: [],
    };
    this.getTitleName = this.getTitleName.bind(this);
  }

  componentDidMount() {
    const key = this.props.accountKey;
    getCharacterInfo(key, this.props.characterName)
    .then(response => {
      this.setState({
        level: response.data.level,
        gender: response.data.gender,
        race: response.data.race,
        profession: response.data.profession,
        age: Math.round(response.data.age / 60 / 60),
        created: (response.data.created).replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):\d+Z/, '$1-$2-$3 $4:$5 UTC'),
        equipment: response.data.equipment,
        specializations: response.data.specializations,
      });

      this.getTitleName(response.data.title);

      this.setState({isLoadingCharacter: false });
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
      <div className='col-md-4'>
        <Character
          name={ this.props.characterName }
          level={ this.state.level }
          gender={ this.state.gender }
          race={ this.state.race }
          profession={ this.state.profession }
          age={ this.state.age }
          created={ this.state.created }
          title={ this.state.title }
          isLoading={ this.state.isLoadingCharacter }
        >
          <Equipment equipment={ this.state.equipment } />
        </Character>
      </div>
    )
   }
 }

 CharacterContainer.propTypes = {
   characterName: PropTypes.string.isRequired,
   accountKey: PropTypes.string.isRequired,
 };
