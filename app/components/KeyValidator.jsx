import React, { PropTypes, Component } from 'react';

export default class KeyValidator extends Component {
  render() {
    return (
      <p>
        { this.props.badKey === true
          ? <span className={ this.props.loadingAnimation }>Bad key!</span>
          : <span>This key is dope!</span> }
      </p>
    );
  }
}

KeyValidator.propTypes = {
  badKey: PropTypes.bool.isRequired,
  loadingAnimation: PropTypes.string,
};
