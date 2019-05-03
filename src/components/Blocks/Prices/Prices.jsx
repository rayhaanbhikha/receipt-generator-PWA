import React from 'react'
import Block from "../../Block/Block";

const Prices = props => {
    const prices = [5, 10, 15, 20, 25, 30, 35]
    let style = {
        "background": "#77ccdb",
        "border": "2px solid #0f3e7b"
    }
    return (
        <div className="price-blocks blocks">
            {prices.map((price, index) =>
                <Block key={index} text={`£${price.toString()}`} value={price} style={style} blockEventHandler={props.blockEventHandler}/>)
            }
        </div>
    )
}

export default Prices;