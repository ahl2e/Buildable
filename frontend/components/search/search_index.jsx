import React from 'react';
import SearchIndexItem from './search_index_item';
import {Link} from 'react-router-dom';

class SearchIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searches:props.searches
    };
  }

  componentDidMount() {
    this.props.fetchSearchResults();
  }

  render(){
    if(this.props.searches.length){

  return(
    <div>
      <ul className="search-index-list">
        {this.props.searches.map((search) => <SearchIndexItem  search={search} />)}
      </ul>
    </div>
  )
}else{
  return(
    <div>
      <h1>We don't have anything like that.</h1>
      <Link to="/projects/:project_Id/steps" id="search-build-link">I guess you have to build it.</Link>
    </div>
  );
}
}
}

export default SearchIndex;
