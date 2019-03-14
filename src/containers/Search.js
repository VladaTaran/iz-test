import { connect } from 'react-redux';
import { search } from '../redux/actions/search';
import Search from '../components/Search';

const mapStateToProps = (state) => ({
    text: state.search.text
  });
  
  const mapDispatchToProps = (dispatch) => ({
      search: (text) => dispatch(search(text))
  });


  export default connect(mapStateToProps, mapDispatchToProps)(Search);
