import React, { Component } from 'react'
import Item from './Item'

export default class Items extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [{ item: "", price: 0.00 }]
        }
    }

    updateTotal = () => this.props.updateTotal(this.state.items);

    updateItem = (event, id) => {
        this.setState({
            items: this.state.items.map((item, index) => {
                if (index === id) {
                    return {
                        ...item,
                        [event.target.name]: event.target.value
                    }
                }
                return item;
            })
        }, this.updateTotal);
    }

    addItem = () => {
        this.setState({
            items: [...this.state.items, { item: "", price: 0.00 }]
        })
    }

    removeItem = (id) => {
        this.setState({
            items: this.state.items.filter((item, index) => index !== id)
        }, this.updateTotal)
    }

    renderItems = () => {
        return this.state.items.map((item, i) =>
            <Item
                key={i}
                id={i}
                updateItem={this.updateItem}
                removeItem={this.removeItem}
                {...item}
            />
        )
    }

    render() {
        return (
            <div className="items">
                {this.renderItems()}
                <button onClick={this.addItem}>Add Item</button>
            </div>
        )
    }
}
