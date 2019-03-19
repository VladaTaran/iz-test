import { connect } from 'react-redux';
import getPersons from '../redux/selectors/getPersons';
import Search from '../components/Search';

const mapStateToProps = (state) => ({
  persons: state.personsList.persons
});
  
const mapDispatchToProps = (dispatch) => ({
  getPersons: (limit, offset, name, city, funds, phone) => dispatch(getPersons(limit, offset, name, city, funds, phone))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
