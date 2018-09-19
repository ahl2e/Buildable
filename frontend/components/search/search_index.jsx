import React from 'react';
import SearchIndexItem from './search_index_item';

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
      debugger

  return(
    <div>
      <ul>
        {this.props.searches.map((search) => <SearchIndexItem  search={search} />)}
      </ul>
    </div>
  )
}else{
  return(
    <div>
      <h1>We don't have anything like that.</h1>
      <h1>I guess you have to build it.</h1>
    </div>
  );
}
}
}

export default SearchIndex;
