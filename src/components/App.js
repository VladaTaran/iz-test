import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPersons } from '../redux/selectors/getPersons';
import Pagination from './Pagination';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getPersons('http://localhost:8080/'))
  }
  render() {
    const { error } = this.props;
    return (
      <div>
        {!error && <Pagination />}
        
          {/* {!error && persons.map(person=> (<div>{person.name}</div>))} */}
        {/* </Pagination> */}
      </div>
    );
  }
}

const mapStateToProps = ({personsList: {persons, count, error }}) => {
  // console.log(persons)
  return {
    persons,
    count,
    error
  }
  
}

export default connect(mapStateToProps)(App);
