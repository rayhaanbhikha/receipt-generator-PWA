import React from 'react'
import "./Block.css";

const Block = props => {

    const handleClick = () => {
        window.navigator.vibrate(200)
        return props.blockEventHandler(props.value);
    }

    return (<div className="block" style={props.style} onClick={handleClick}>
        {props.text}
    </div>)
}


export default Block;
