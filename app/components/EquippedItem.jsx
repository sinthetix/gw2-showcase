import React, { PropTypes,Component } from 'react';

const EquippedItem = (props) => {
  return props.isLoading === true
  ? <img src='./svg/loading.svg' alt='Loading...' />
  : <div className='item'>
      { props.icon ? <img src={ props.icon } alt={ props.name } title={ 'Item: ' + props.rarity } className={ 'img-circle img-responsive item-resize get-inline ' + props.rarity } /> 
        : <img src='../img/itemnotfound.png' alt={ props.name } className={'img-circle img-responsive item-resize get-inline ' + props.rarity } /> }
    </div>
}

EquippedItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  slot: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  skinName: PropTypes.string,
};

export default EquippedItem;
