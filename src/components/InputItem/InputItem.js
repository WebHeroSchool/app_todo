import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick = () => {
        this.setState({
            inputValue: ''
        });

        this.props.onClickAdd(this.state.inputValue);
    }

    render () {
        const { onClickAdd } = this.props;
        
        return ( <Grid>
                <TextField className = {styles.input}
                    label="Добавить задание"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    value={this.state.inputValue}
                    onChange={event => this.setState ({inputValue: event.target.value})}
                />
            
                <Button className = {styles.button}
                    variant="contained" 
                    color="primary" 
                    disableElevation
                    onClickAdd={onClickAdd}
                    >
                Добавить
                </Button>
            </Grid>
        )
    }
}

export default InputItem;