import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const items = [
    {id: 1, value: 'Написать новое приложение'},
    {id: 2, value: 'Прописать props-ы'},
    {id: 3, value: 'Сделать все дела'},
    {id: 4, value: 'Постричься'},
    {id: 5, value: 'Сделать перерыв'}
];

const App = () => (<div>
    <h1>todos</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
</div>)

export default App;