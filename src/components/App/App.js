import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
    const items = [
        {   id: 1, 
            value: 'Написать новое приложение', 
            isDone:true
        },
        {   id: 2, 
            value: 'Прописать props-ы', 
            isDone:false
        },
        {   id: 3,
            value: 'Сделать все дела',
            isDone:true
        },
        {   id: 4,
            value: 'Постричься',
            isDone:false
        }
    ];

 return (
    <div className = {styles.wrap}>
        <h1 className= {styles.title}>Список важных дел:</h1>
        <InputItem />
        <ItemList items={items} />
        <Footer count={3} />
    </div>);
}

export default App;