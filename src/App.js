import React, { Component } from 'react';
// import Receipt from "./components/Receipt";
import Card from "./components/Card/Card";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipts: []
    }
  }

  // addReceipt = () => {
  //   let newReceipt = {
  //     items: [],
  //     total: 0.00
  //   }
  //   this.setState({
  //     receipts: [...this.state.receipts, newReceipt]
  //   })
  // }

  // deleteReceipt = (receiptIndex) => {

  // }

  // renderReceipts = () => {
  //   return this.state.receipts.map((receipt, index) =>
  //     <Receipt key={index} id={index} deleteReceipt={this.deleteReceipt} {...receipt}/>
  //   );
  // }

  render() {
    return (
      <div className="App">
        <h3>Receipt Generator</h3>

        {/* {this.renderReceipts()} */}
        <Card />

        {/* <button onClick={this.addReceipt}>addReceipt</button> */}

      </div>
    );
  }
}

export default App;
