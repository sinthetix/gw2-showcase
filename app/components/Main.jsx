import React, { PropTypes, Component } from 'react';

export default class Main extends Component {
  // I feel like this is supposed to have constructor(props) but if I add it, it fails
  // this should be stateless function but toplevel doesn't hotload as non-component
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>GW2 Showcase</h1>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element,
};
