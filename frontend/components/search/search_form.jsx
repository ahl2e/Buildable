import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
    query: ""
  };
}


update(field) {
  return (e) =>{
    this.setState({[field]: e.target.value});
  };
}

handleSubmit(e){
  e.preventDefault();
  this.props.fetchSearchResults(this.state).then(() => this.props.history.push(`/api/projects/search`));
}

render(){

  return(
    <div id="search-form">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input
        id="search-bar"
        type="text"
        value={this.state.query}
        onChange={this.update("query")}
        placeholder=" I want to build a..."
         />
       <input id="search-submit" type="submit" value="Search" />
     </form>
    </div>
  )
}

};

export default withRouter(SearchForm);
