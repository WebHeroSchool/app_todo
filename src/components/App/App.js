import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = [
    {id: 1, item: 'Написать новое приложение'},
    {id: 2, item: 'Прописать props-ы'},
    {id: 3, item: 'Сделать все дела'},
    {id: 4, affair: 'Постричься'}
];

const App = () => (<div>
    <h1>todos</h1>
    <InputItem />
    <ItemList todoItem={todoItem} />
    <Footer count={3} />
</div>)

export default App;