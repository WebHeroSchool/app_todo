import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';


const InputItem = () => (<div className = {styles.wrap}>
    <TextField className = {styles.input}
        label="Добавить задание"
        variant="outlined"
        id="custom-css-outlined-input"
    />
</div>);

export default InputItem;