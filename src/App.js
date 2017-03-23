import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  render() {
    let { data } = this.props;
    return (
      <div>
        <div className="header">
          <nav className="navbar navbar-fixed-top">
            <div className="container">
                <a className="logo" href="#">Taskermabober</a>
            </div>
          </nav>
        </div>
      <div className="main">
        <div className="container">
          <div className="row">
              { data.map((card, index)  => ( <Card key={card.card_id} cardData={card} /> )) }
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
