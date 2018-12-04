import React from 'react';
import CategoryIndexItem from './category_index_item';
import {Link} from 'react-router-dom';

const CategoryIndex = (props) =>{
  // debugger
  if(props.projects.length > 1){
    return props.projects.map((project,idx) => {
      return (
        <div>
          <ul>
            <CategoryIndexItem key={idx} project={project}/>
          </ul>
        </div>
      )
    })
  }else{
    return(
      <div>
        <h1>We don't have anything in that category.</h1>
        <Link to="/create" id="search-build-link">I guess you have to build it.</Link>
      </div>
    )
  }
};

export default CategoryIndex;
