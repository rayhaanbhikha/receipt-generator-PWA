import React from 'react'
import Block from "../../Block/Block";

const ClothingTypes = props => {
    const clothingTypes = ["dress", "suit", "sari", "trouser", "blouse"]
    let style = {
        "background": "#7dc37d",
        "border": "2px solid #023e02"
    }
    return (
        <div className="clothing-type-blocks blocks">
            {clothingTypes.map((clothingType, index) =>
                <Block key={index} text={clothingType} value={clothingType} style={style}/>)
            }
        </div>
    )
}

export default ClothingTypes;