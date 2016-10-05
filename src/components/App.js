import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    // get initial state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish){
    //get the current state
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();

    // add the new fish
    fishes[`fish-${timestamp}`] = fish;

    //set state
    this.setState({fishes})
  }

  render() {

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}

export default App;
