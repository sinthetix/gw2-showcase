// receives array of items, maps them to equipment container
import React, { Component, PropTypes } from 'react';
import EquippedItemContainer from '../containers/EquippedItemContainer';

export default class Equipment extends Component {
  render(){
    return (
      <div>
        { this.props.equipment.map((item) => {
          return <EquippedItemContainer key={ item.slot } item={ item } />;
        })
      }
      </div>
    )
  }
}

Equipment.propTypes = {
  equipment: PropTypes.arrayOf(PropTypes.object).isRequired,
};
