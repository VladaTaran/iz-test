import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Search from '../containers/Search';
import PersonCard from '../containers/PersonCard';

const styles = theme => ({
    cardContainer: {
      display: 'flex',
      maxWidth: 1000,
      width: '100%',
      margin: '0 auto',
      flexWrap: 'wrap',
      listStyle: 'none',
      justifyContent: 'center',
      '@media (max-width: 700px)': {
        display: 'block',
        maxWidth: 600,
        margin: '0 auto',
      },
      '@media (max-width: 400px)': {
        maxWidth: 300,
        margin: 0,
      },
    },
    paginetionContainer: {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'center',
      maxWidth: 1000,
      margin: '0 auto',
      '@media (max-width: 700px)': {
        maxWidth: 600,
        display: 'grid'
      },
      '@media (max-width: 400px)': {
        maxWidth: 300,
        margin: '0 auto',
      }
    },
    button: {
      margin: theme.spacing.unit,
      '@media (max-width: 700px)': {
        width: 400,
      },
      '@media (max-width: 400px)': {
        width: 300,
      }
    },
});

class Pagination extends React.Component {
    state = {
      currentPage: 1,
      cardsPerPage: 9,
      offset: 0,
      isPrevBtnActive: false,
      isNextBtnActive: true,
      name: ''
    }
  
    componentDidMount() {
      this.props.getPersons(this.state.cardsPerPage,this.state.offset)
    }

    changePage = (i) => {
      this.setState({ currentPage: i});
      const { name, city, funds, phone } = this.props;
      const { cardsPerPage } = this.state;
      this.props.getPersons(cardsPerPage, ( (i-1)*cardsPerPage ),name, city, funds, phone)
      }

      firstPage = () => {
        this.setState({ currentPage: 1});
        const { name, city, funds, phone } = this.props;
        const { cardsPerPage }  = this.state;      
        this.props.getPersons(cardsPerPage, 0, name, city, funds, phone)
      }

      prevPage = () => {
        this.setState({ currentPage: this.state.currentPage - 1});
        const { name, city, funds, phone } = this.props;
        const { cardsPerPage, currentPage } = this.state;
        this.props.getPersons(cardsPerPage, cardsPerPage * (currentPage-2), name, city, funds, phone);
      }

      nextPage = () => {
        this.setState({ currentPage: this.state.currentPage + 1 });
        const { name, city, funds, phone } = this.props;
        const { cardsPerPage, currentPage } = this.state;
        this.props.getPersons(cardsPerPage, cardsPerPage * currentPage, name, city, funds, phone);
      }

      lastPage = totalPages => {
        this.setState({currentPage: totalPages});
        const { name, city, funds, phone } = this.props;
        const { cardsPerPage } = this.state;
        this.props.getPersons(cardsPerPage, ( (totalPages-1)*cardsPerPage )+1, name, city, funds, phone)
      }
    

    render() {
        let { classes, persons, count } = this.props;
        let { currentPage, 
            cardsPerPage, 
            offset,
            isPrevBtnActive, 
            isNextBtnActive, 
        } = this.state;

        //Pagination logic
        const totalPages = Math.ceil(count / cardsPerPage);

        const lowerPageNumber = Math.min(Math.max(currentPage - 2, 1), totalPages);
        const upperPageNumber = Math.min(Math.max(currentPage + 2, 3),totalPages);
        
        const range = [];
        for(let i = lowerPageNumber; i<= upperPageNumber; i++) {
          range.push(i);
        }

        isPrevBtnActive = currentPage > 1;
        isNextBtnActive = currentPage < totalPages;

        return (
            <div>
                <Search 
                  limit = {cardsPerPage}
                  offset = {offset}

                />
                <ul className={classes.cardContainer}>
                    {persons.map(person => (
                        <li key = {person.id+person.name}>
                            <PersonCard
                              id = {person.id} 
                              name = {person.name}
                              email= {person.email}
                              funds = {person.funds}
                              city = {person.city}
                              phone = {person.phone}
                            />
                        </li>
                    ))}
                </ul>
                <div className={classes.paginetionContainer}>
                    <Button
                      className = {classes.button}
                      onClick = {this.firstPage}
                      disabled={!isPrevBtnActive}
                    >
                        First
                    </Button>
                    <Button
                      className = {classes.button}
                      onClick = {this.prevPage}
                      disabled={!isPrevBtnActive}
                    >
                        Prev
                    </Button>

                    {range.map(i => ( 
                        <Button
                          key={i+'1erj'}
                          variant="contained"
                          color = 'primary'
                          className = {classes.button}
                          onClick={() => this.changePage(i)}
                        >
                            {i}
                        </Button>
                    ))}

                    <Button
                      className = {classes.button}
                      onClick={this.nextPage}
                      disabled={!isNextBtnActive}
                    >
                      Next
                    </Button>
                    <Button
                    className = {classes.button}
                      onClick = {() => this.lastPage(totalPages)}
                      disabled = {!isNextBtnActive}
                    >
                      Last
                    </Button>
                </div>
            </div>
        )
    }
}

Pagination.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagination);