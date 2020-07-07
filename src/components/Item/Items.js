import React from 'react';
import classNames from 'classnames';
import styles from './Item.module.css';
import DeleteIcon from '@material-ui/icons/Delete';




function Item ( props ) {

     const {value, isDone} = props;

    const useStyles = classNames(
        styles.item,
        {[styles.done]: isDone},
    )
    
    return ( 
        <div className = {styles.wrap}>
            <ul className = {useStyles}>
                {value} <DeleteIcon />
            </ul>
        </div>
    )
};

export default Item;