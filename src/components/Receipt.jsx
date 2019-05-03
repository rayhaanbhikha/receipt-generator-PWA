import React, { Component } from 'react'
import Items from "./Items"
import "./Receipt.css";
import Block from "./Block/Block"
import PriceBlocks from "./PriceBlocks/PriceBlocks";


class Receipt extends Component {

    constructor(props) {
        super(props)

        this.state = {
            total: 0.00
        }
    }


    updateTotal = (items) => {
        let sum = 0;
        items.forEach(item => {
            sum += Number(item.price);
        })
        this.setState({
            total: sum
        })
    }

    renderBlocks = () => {
        return [...Array(5)].map((e, i) => <Block key={i} id={i+1}/>)
    }

    render() {
        return (
            <React.Fragment>
                <div className="receipt">
                    <PriceBlocks />
                </div>

            </React.Fragment>
        )
    }
}

export default Receipt;