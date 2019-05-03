import React, { Component } from 'react'
import Prices from "../Blocks/Prices/Prices";
import ClothingTypes from "../Blocks/ClothingTypes/ClothingTypes";
import Colors from "../Blocks/Colors/Colors";


import "./Card.css";

export default class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hidden: true
        }
    }

    toggleHidden = () => {
        this.setState(prevState => {
            return {
                hidden: !prevState.hidden
            }
        })
    }

    render() {
        return (
            <div className="card-wrapper">
                <div className="card-wrapper2">

                    <div className="card-toggle" onClick={this.toggleHidden}>
                        {this.state.hidden ?  <img src="arrow_up.svg" alt="" /> :  <img src="arrow_down.svg" alt="" />}
                    </div>
                    <div className="card" hidden={this.state.hidden}>
                        <Prices />
                        <hr className="hr" />
                        <ClothingTypes />
                        <hr className="hr" />
                        <Colors />
                    </div>
                </div>
            </div>
        )
    }
}
