import React from 'react';
import CategoryIndexItem from './category_index_item';
import {Link} from 'react-router-dom';

const CategoryIndex = (props) =>{
  var projects = props.projects.map(project => {
    return (<CategoryIndexItem key={project.id} project={project}/>);
  });

  if(props.projects.length > 0){
    var label = parseHistory(props.history.location.pathname);
      return (
        <div>
          <div id='category-label-container'>
            <h1 id='category-label'>{label}</h1>
          </div>
          <ul className='projects-index-list'>
            {projects}
          </ul>
        </div>
      )
  }else{
    return(
      <div>
        <h1>We don't have anything in that category.</h1>
        <Link to="/create" id="search-build-link">I guess you have to build it.</Link>
      </div>
    )
  }
};


const parseHistory = (str) => {
  var arr = str.split("/");
  if (arr[arr.length -1].split('_').length > 1){
    return arr[arr.length -1].split('_').join(" ");
  }else{
    return arr[arr.length -1];
  }
}

export default CategoryIndex;
