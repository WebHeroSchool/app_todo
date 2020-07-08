import React from 'react';
import Item from '../Item/Items';

const ItemList = ({ items }) => {
    
    const itemsList = items.map(item => {
        return <Item  key={item.id} value={item.value}  isDone={item.isDone} />
    })

    return (
        <div> {itemsList} </div>
    )
};

export default ItemList;