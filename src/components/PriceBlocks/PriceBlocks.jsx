import React from 'react'
import Block from "../Block/Block";

import "./PriceBlocks.css";

const PriceBlocks = props => {
    const priceBlocks = [5, 10, 15, 20]
    return (
        <div className="price-blocks blocks">
            {priceBlocks.map((price, index) =>
                <Block key={index} text={`£${price.toString()}`} value={price} />)
            }
        </div>
    )
}

export default PriceBlocks;