import React, { PropTypes, Component } from 'react';

export default class KeyValidator extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <p>
        { this.props.badKey ? 'Bad Key!' : 'Great key!' }
      </p>
    );
    // ignores loadingStatus currently but good for now
  }
};

KeyValidator.propTypes = {
  badKey: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
};
