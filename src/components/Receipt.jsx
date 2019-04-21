import React, { Component } from 'react'
import Items from "./Items"



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


    render() {
        return (
            <div className="receipt">
                <Items updateTotal={this.updateTotal} />
                <div>
                    Total:  {this.state.total}
                </div>
            </div>
        )
    }
}

export default Receipt;