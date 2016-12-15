import React, { PropTypes, Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className='container'>
          { this.props.children }
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element,
};
