import React, { PropTypes, Component } from 'react';

class KeyEntry extends Component {
  render() {
    return (
      <div className='form-group form-group-lg'>
        <label className='col-sm-2 control-label'>Account Key:</label>
        <div className='col-sm-8 input-group input-group-lg'>
          <input onChange={ this.props.setAccountKey } className='form-control' type='text' id='keyInput' placeholder='Please enter a valid API key.' />
          <span className='input-group-btn'>
            {this.props.children}
          </span>
        </div>
      </div>
    );
  }
}

KeyEntry.propTypes = {
  setAccountKey: PropTypes.func.isRequired,
};

export default KeyEntry;
