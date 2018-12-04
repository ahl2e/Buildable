import React from 'react';
import CategoryIndexItem from './category_index_item';
import {Link} from 'react-router-dom';

const CategoryIndex = (props) =>{
  // debugger
  return props.projects.map((project,idx) => {
    return (
      <div>
        <ul>
          <CategoryIndexItem key={idx} project={project}/>
        </ul>
      </div>
    )

  })
};

export default CategoryIndex;
