import { connect } from 'react-redux';
import getSearchedPersons from '../redux/selectors/getSearchedPersons';
import Pagination from '../components/Pagination';


const mapStateToProps = ({personsList: {persons, count, error }, search: {text}}) => ({
    persons: getSearchedPersons(persons, text)
  }); 
   
  export default connect(mapStateToProps)(Pagination);