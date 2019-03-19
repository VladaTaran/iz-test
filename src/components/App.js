import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../containers/Pagination';


class App extends Component {
  render() {
    const { error } = this.props;
    return (
      <div>
        {!error ? <Pagination /> : <p>Sorry! We already trying to fix that.</p>}
      </div>
    );
  }
}

const mapStateToProps = ({personsList: { error }}) => ({
  error
});

export default connect(mapStateToProps)(App);
