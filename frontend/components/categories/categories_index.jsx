import React from 'react';
import CategoriesIndexItem from './categories_index_item';
import {Link} from 'react-router-dom';

class CategoriesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
    this.props.fetchCategoryProjects(this.props.match.params.category);
  }

  render() {
    return(
      <p>Hi</p>
    )
  }
}

export default CategoriesIndex;
