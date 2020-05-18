import React from 'react';
import Item from '../Item/Items';

const ItemList = props => { 
    const todoItem = [ 
    {id: 1, affair: 'Написать новое приложение'},
    {id: 2, affair: 'Прописать props-ы'},
    {id: 3, affair: 'Сделать все дела'},
    {id: 4, affair: 'Постричься'}
];

return (
    <ul>
        {todoItem.map(item =>(
            <li key={item.id}>{item.affair}</li>
        ))}
    </ul>
);
};

export default ItemList;