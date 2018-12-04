import React from 'react';
import {Link} from 'react-router-dom';


const CategoryIndexItem = ({ project }) => {
  return (
  <li className="project-index-item">
    <Link to={`/projects/${project.id}`}>
      <div className="test-photo">
        <img src={`${project.imageUrl}`} />
      </div>
      <div className="index-item-footer">
      <span className="title">{project.title}</span>
      <span className="author"> by: {project.username}</span>
      </div>
    </Link>
  </li>
);
}
export default CategoryIndexItem;
