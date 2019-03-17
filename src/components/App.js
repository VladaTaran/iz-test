import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getPersons } from '../redux/selectors/getPersons';
import Pagination from '../containers/Pagination';

class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getPersons('http://localhost:8080/?limit=9&offset='))
  // }
  render() {
    const { error } = this.props;
    return (
      <div>
        {!error ? <Pagination /> : <p>Sorry! We already trying to fix that.</p>}
      </div>
    );
  }
}

const mapStateToProps = ({personsList: {persons, count, error }}) => ({
  persons,
  count,
  error
});

export default connect(mapStateToProps)(App);
