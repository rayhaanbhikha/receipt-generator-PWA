import React from 'react'
import "./Block.css";

const Block = props => <div className="block" style={props.style}>
    {props.text}
</div>
export default Block;
