import React from 'react';
import Item from '../Item/Items';

const ItemList = ({ items, onClickDone, onClickDelete }) => {
    
    const itemsList = items.map(item => {
        return <Item  
            value={item.value}  
            isDone={item.isDone} 
            id={item.id}
            onClickDone={onClickDone} 
            onClickDelete={onClickDelete}
        />
    })

    return (
        <div> {itemsList} </div>
    )
};

export default ItemList;