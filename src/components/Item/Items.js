import React from 'react';
import classNames from 'classnames';
import styles from './Item.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';


function Item ( props ) {

     const {value, isDone, onClickDone, onClickDelete, id} = props;

    const useStyles = classNames(
        styles.item,
        {[styles.done]: isDone},
    )
    
    return ( 
        <div className = {styles.wrap}>
            <ul className = {useStyles}>
              <Checkbox 
                checked = {isDone}
                tabIndex = {-1}
                onClick = {() => onClickDone(id)}
              /> {value} 
              <DeleteIcon 
                onClick = {() => onClickDelete(id)} 
              />
            </ul>
        </div>
    )
};

export default Item;