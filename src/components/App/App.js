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
        ],
        count: 4
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        
        this.setState ({ items: newItemList });
    };

    onClickDelete = (id) => this.setState((state) => ({ items: state.items.filter((item) => item.id !== id)}));

    onClickAdd = () => this.setState(state => ({
        items: [
            ...state.items,
            {
                value: "Ckdck",
                isDone: false,
                id: state.count + 1
            }
        ],
        count: state.count + 1
    }));

    render () {
           
     return (
            <div className = {styles.wrap}>
                <h1 className= {styles.title}>Список важных дел:</h1>
                <div className = {styles.container}>
                    <InputItem onClickAdd={this.onClickAdd} />
                    <ItemList 
                        items={this.state.items} 
                        onClickDone = {this.onClickDone} 
                        onClickDelete = {this.onClickDelete} 
                    />
                    <Footer count={this.state.count} />
                </div>
            </div>
         );
    }
}

export default App;