import React, { Component } from 'react';

export default class CardLabel extends Component {
  render() {
    return (
      <span className="card-title">{ this.props.label }</span>
    );
  }
}