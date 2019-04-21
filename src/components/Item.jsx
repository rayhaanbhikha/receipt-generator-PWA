import React from 'react'

const Item = props => {
    let {id, item, price} = props;
    return (
        <div className="item">
            <input type="text" name="item" placeholder="Item" value={item} onChange={(e) => props.updateItem(e, id)} />
            <input type="number" name="price" placeholder="£0.00" value={price} onChange={(e) => props.updateItem(e, id)} />
            <button onClick={() => props.removeItem(id)}>remove</button>
        </div>
    )
}

export default Item;


