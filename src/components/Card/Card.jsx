import React, { Component } from 'react'
import Prices from "../Blocks/Prices/Prices";
import ClothingTypes from "../Blocks/ClothingTypes/ClothingTypes";
import Colors from "../Blocks/Colors/Colors";


import "./Card.css";

export default class Card extends Component {
    render() {
        return (
            <div className="card-wrapper">

                <div className="card">
                    <Prices />
                    <hr className="hr" />
                    <ClothingTypes />
                    <hr className="hr" />
                    <Colors />
                </div>
            </div>
        )
    }
}
