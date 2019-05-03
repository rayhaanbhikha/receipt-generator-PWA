import React, { Component } from 'react';
// import Receipt from "./components/Receipt";
import Card from "./components/Card/Card";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockEvent: ""
    }
  }


  handleBlockEvent = (event) => this.setState({
    blockEvent: event
  })
  render() {
    return (
      <div className="App">
        <h3>Receipt Generator</h3>

        <div>
          Block event: {this.state.blockEvent}
        </div>

        {/* {this.renderReceipts()} */}
        <Card blockEventHandler={this.handleBlockEvent}/>

        {/* <button onClick={this.addReceipt}>addReceipt</button> */}

      </div>
    );
  }
}

export default App;
