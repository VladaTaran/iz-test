import React from 'react';
import { connect } from 'react-redux';
import { search } from '../redux/actions/search'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 40,
        alignItems: 'center',
    },
    input: {
        marginRight: 20,
        width: 200,
    },
    iconButton: {
        padding: 10,
    },
}

class Search extends React.Component {
    changeInput = (e) => {
        this.props.search(e.target.value)
    };

    render() {
        const { classes } = this.props;
        
        return (
            <form className={classes.form}>
                <Input 
                    className={classes.input}
                    type='text'
                    onChange = {this.changeInput}
                />
                <SearchIcon 
                    className={classes.iconButton}
                    color='primary'
                />
            </form>
        )  
    }
} 

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
const mapStateToProps = (state) => {
    // console.log('state from Search component ', state.search.text)
    return {
    //   persons: state.personsList.persons,
      text: state.search.text
    }
}  

const mapDispatchToProps = (dispatch) => ({
    search: (text) => dispatch(search(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Search));