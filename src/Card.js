import React, { Component } from 'react';
import CardItem from './CardItem';
import CardMenu from './CardMenu';
import CardLabel from './CardLabel';

export default class Card extends Component {
  render() {
    let card = this.props.cardData;
    let { tasks } = card;
    return (
      <div className="card">
        <div className="card-heading">
          <CardLabel label={ card.card_title } />
          <CardMenu />
        </div>
        <div className="card-body">
          <ul className="card-items">
            { tasks.map(task => ( <CardItem key={ task.task_id } details={ task } /> )) }
          </ul>
        </div>
        <div className="card-footer">
          <form className="card-form">
            <input className="card-input" type="text" placeholder="Add a card ..." />
          </form>
        </div>
      </div>
    );
  }
}