import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PersonCardForm from './PersonCardForm';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MailIcon from '@material-ui/icons/Mail';
import LocationIcon from '@material-ui/icons/LocationOn';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import PhoneIphone from '@material-ui/icons/PhoneIphone';

const styles = theme => ({
  card: {
    maxWidth: 345,
    width: 300,
    height: 320,
    margin: '0 10px 10px 10px',
    '@media (max-width: 700px)': {
      margin: '0 auto 10px',
    },
    '@media (max-width: 400px)': {
      margin: '0 0 10px 0',
    },
  },
  description: {
    alignItems: 'center', 
    display: 'flex',
    wordSpacing: 3,
    marginBottom: 15,
  },
  icon: {
      marginRight: 10,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
class PersonCard extends React.Component  {
  state = {
    isEdit: false,
  }

  editInfo = () => {    
    this.state.isEdit ? this.setState({isEdit: false}) : this.setState( {isEdit: true});
  }

  changeInfo = person => {
    this.props.editPerson(this.props.person.id, person);
    this.setState({isEdit: false})
  }

  render() {
    const { classes, id, name, email, funds, city, phone } = this.props;
    return(
      <Card className={classes.card}>
        {!this.state.isEdit ? (
        <CardActionArea>
          <CardContent>
            <Typography className={classes.description} gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              className={classes.description} 
              component="p"
            >
              <MailIcon className={classes.icon} /> 
              {email}
            </Typography>
            <Typography component="p" className={classes.description}>
              <EuroSymbol className={classes.icon} />
              {funds}
            </Typography>
            <Typography component="p" className={classes.description}>
              <LocationIcon className={classes.icon} />
              {city}
            </Typography>
            <Typography component="p" className={classes.description}>
              <PhoneIphone className={classes.icon} />
              {phone}
            </Typography>
          </CardContent>
        </CardActionArea>) : (
          <PersonCardForm 
            id = {id}
            name = {name} 
            email = {email}
            funds = {funds}
            city = {city}
            phone = {phone} 
            changeInfo = {this.changeInfo} 
          />
        )}
        <CardActions>
          <Button size="small" color="primary" onClick = {this.editInfo}>
            {this.state.isEdit ? 'Cancel' : 'Edit'} 
          </Button>
        </CardActions>
      </Card>
    )
  }
}

PersonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonCard);