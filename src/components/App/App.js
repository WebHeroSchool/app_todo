import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {

    state = {
        items: [
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
        ]
    }

    onClickDone = (isDone) => console.log(isDone);

    render () {
           
     return (
            <div className = {styles.wrap}>
                <h1 className= {styles.title}>Список важных дел:</h1>
                <div className = {styles.container}>
                    <InputItem />
                    <ItemList items={this.state.items} onClickDone = {this.onClickDone} />
                    <Footer count={2} />
                </div>
            </div>
         );
    }
}

export default App;