import React from 'react';
import Item from '../Item/Items';

const ItemList = ({ items, onClickDone }) => {
    
    const itemsList = items.map(item => {
        return <Item  
            value={item.value}  
            isDone={item.isDone} 
            id={item.id}
            onClickDone={onClickDone} 
        />
    })

    return (
        <div> {itemsList} </div>
    )
};

export default ItemList;