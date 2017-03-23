import React, { Component } from 'react';

export default class CardItem extends Component {
  render() {
    let { details } = this.props;
    return (
      <li>{ details.text }</li>
    );
  }
}