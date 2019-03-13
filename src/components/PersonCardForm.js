import React from 'react';
import putPersonData from '../redux/selectors/putPersonData';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import putPersonData from '../redux/selectors/putPersonData';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    }
})

class PersonCardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props ? props.name : '',
            email: props ? props.email : '',
            funds: props ? props.funds : '',
            city: props ? props.city : '',
            phone: props ? props.phone : ''
        }
    }
   

    onInputChange = (event) => {
          event.persist();
          const { name, value } = event.target;
          this.setState((prevState)=>({
              [name]: value
          }));
    }

    changeInfo = (e) => {
        e.preventDefault();
        putPersonData(this.state, this.props.changeInfo)
    }
    
    render() {
        const { classes, name, email, funds, city, phone } = this.props;
        return (
        <form 
            onSubmit = {this.changeInfo}
            className={classes.margin}
        >
            <TextField 
              type='text' 
              name='name'
              label={name}
              onChange={this.onInputChange}
            />
            <TextField
                type='email'
                name='email'
                label={email}
                onChange={this.onInputChange}
            />
            <TextField
                type='text'
                name='funds'
                label={funds}
                onChange={this.onInputChange}
            />
            <TextField
                type='text'
                name='city'
                label={city}
                onChange={this.onInputChange}
            />
            <TextField
                type='text'
                name='phone'
                label={phone}
                onChange={this.onInputChange}
            />
            <Button 
              size="small" 
              color="primary" 
              style={{display:'inline'}}
              type="submit"
            >
              OK
            </Button>
          </form>
        )
    }
}

export default withStyles(styles)(PersonCardForm);
