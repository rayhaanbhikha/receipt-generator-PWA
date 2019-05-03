import React, {Component} from 'react'
import PriceBlocks from "../PriceBlocks/PriceBlocks";

import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <PriceBlocks />
      </div>
    )
  }
}
