import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    form: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 40,
        alignItems: 'center', 
        flexWrap: 'wrap',
        maxWidth: 500,
        margin: '0 auto',
        '@media (max-width:450px)':{
            marginLeft: 60,
        }
    },
    input: {
        width: 200,
        padding: 5,
        margin: '20px 20px 0 0',
    },
    iconButton: {
        padding: 5,
    },
    fab: {
        marginTop: 30,
      },
})

class Search extends React.Component {
    state = {
        name: '',
        city: '',
        funds: '',
        phone: ''
    }

    changeInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    searchHandler = (e) => {
        e.preventDefault();
        const {name, city, funds, phone } = this.state;
        this.props.getPersons(this.props.limit, this.props.offset, name, city, funds, phone)
    }

    render() {
        const { classes } = this.props;
        
        return (
            <form className={classes.form} onSubmit={this.searchHandler}>
                <Input 
                    className={classes.input}
                    type = "text"
                    onChange = {this.changeInput}
                    placeholder = "name"
                    name = "name"
                />
                <Input 
                    className={classes.input}
                    type = "text"
                    onChange = {this.changeInput}
                    placeholder = "city"
                    name = "city"
                />
                <Input 
                    className={classes.input}
                    type = "text"
                    onChange = {this.changeInput}
                    placeholder = "funds"
                    name = "funds"
                />
                <Input 
                    className={classes.input}
                    type = "text"
                    onChange = {this.changeInput}
                    placeholder = "phone"
                    name = "phone"
                />
                <Fab variant="extended" color="primary" size="medium" className={classes.fab} type="submit">
                    <SearchIcon className={classes.iconButton} color='inherit' />
                    Search
                </Fab>
            </form>
        )  
    }
} 

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Search);