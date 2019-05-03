import React from 'react'
import Block from "../../Block/Block";

const Colors = props => {
    const colors = [
        {text: "Red", color: "#dd8e8e", bgColor: "#9d0808"},
        {text: "Yellow", color: "#e1e187", bgColor: "#727206"},
        {text: "Green", color: "#69b869", bgColor: "#0b6e0b"},
        {text: "Blue", color: "#6e6ecd", bgColor: "#04046c"},
        {text: "Purple", color: "#b45eb4", bgColor: "#700670"},
        {text: "Beige", color: "#e3e3c7", bgColor: "#838314"},
        {text: "Black", color: "#454242", bgColor: "black"},
    ]
    return (
        <div className="price-blocks blocks">
            {colors.map(({text, color, bgColor}, index) =>
                <Block key={index} text={text} value={text} style={getStyle(color, bgColor)} blockEventHandler={props.blockEventHandler}/>)
            }
        </div>
    )
}

function getStyle(color, bgColor){
    return {
        "background": color,
        "border": `2px solid ${bgColor}`
    }
}

export default Colors;