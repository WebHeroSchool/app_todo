import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

const Footer = ({count}) => (
    <div className = {styles.footer}>
        <div className = {styles.container}>
            <div> Осталось сделать: {count}</div>
            <Button variant="contained">Удалить</Button>
            <Button variant="contained" color="primary">Редактировать</Button>
            <Button variant="contained" color="secondary">Выделить все</Button>
        </div>
    </div>);

export default Footer;