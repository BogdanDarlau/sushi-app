import React, { Component } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";

import california from "./images/california.png";
import dragon from "./images/dragon.png";
import dynamite from "./images/dynamite.png";
import philadelphia from "./images/philadelphia.png";
import rainbow from "./images/rainbow.png";
import shrimp from "./images/shrimp.png";

// YOUTUBE LINK : https://www.youtube.com/watch?v=MNE7hsP3JtY

class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        sushiName: "California",
        price: 1.99,
        image: california,
        quantity: 0,
      },
      {
        id: 1,
        sushiName: "Dragon",
        price: 2.49,
        image: dragon,
        quantity: 0,
      },
      {
        id: 2,
        sushiName: "Dynamite",
        price: 1.29,
        image: dynamite,
        quantity: 0,
      },
      {
        id: 3,
        sushiName: "Philadelphia",
        price: 0.89,
        image: philadelphia,
        quantity: 0,
      },
      {
        id: 4,
        sushiName: "Rainbow",
        price: 2.79,
        image: rainbow,
        quantity: 0,
      },
      {
        id: 5,
        sushiName: "Shrimp",
        price: 3.5,
        image: shrimp,
        quantity: 0,
      },
    ],
  };

  handleDelete = (cardId) => {
    const cards = this.state.cards.filter((card) => card.id !== cardId);
    this.setState({ cards });
  };

  handleIncrement = (card) => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantity++;
    this.setState({ cards });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>What do you want to order?</h1>
          <hr />
          <div className="row">
            {this.state.cards.map((card) => (
              <Card
                key={card.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                card={card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
