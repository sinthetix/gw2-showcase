// receives object (hash), sets state
// runs the API calls for respolving the ID of item,upgrades,infusions (/items)
// also stats can just be pulled from stats.attributes, return the object key/values
// with a for in loop for(stat in attributes){<dt>{stat}</dt><dd>{attributes[stat]}}
// item name will just be the skin,
// if skin, get that item info just for the image. if not skinned, item image.
// rarity will be item rarity. stats will be item stats.
import React, { PropTypes, Component } from 'react';
import EquippedItem from '../components/EquippedItem';
import { getItemInfo, getSkinInfo } from '../utils/API';

export default class EquippedItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingItem: true,
      name: '',
      itemIcon: '',
      rarity: '',
      skinIcon: null,
      skinName: null,
    };
    this.checkSkin = this.checkSkin.bind(this);
  }
  componentDidMount() {
    getItemInfo(this.props.item.id)
    .then((response) => {
      this.setState({
        name: response.data.name,
        rarity: response.data.rarity,
        itemIcon: response.data.icon,
      })
    })
    .catch((error) => { console.log('Error getting item: ', error) });
    this.checkSkin(this.props.item.skin);
  }
  checkSkin(skin) {
    if (skin !== undefined) {
      getSkinInfo(skin)
      .then((response) => {
        this.setState({
          skinIcon: response.data.icon,
          skinName: response.data.name,
          isLoadingItem: false,
        })
      })
      .catch((error) => { console.log('Error getting item: ', error); });
    } else {
      this.setState({ isLoadingItem: false });
    }
  }

  render() {
    return (
      <EquippedItem
        name={ this.state.name }
        rarity={ this.state.rarity }
        icon={ this.state.skinIcon || this.state.itemIcon }
        skinName={ this.state.skinName }
        slot={ (this.props.item.slot).split(/(?=[A-Z])/).join(" ") }
      />
    // nested in equipped item is the upgrades and infusions boxes
    // also attributes and stats TODO
     )
  }
}

EquippedItemContainer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slot: PropTypes.string.isRequired,
    infusions: PropTypes.array,
    upgrades: PropTypes.array,
    skin: PropTypes.number,
    attributes: PropTypes.object,
    stats: PropTypes.object
  })
}
