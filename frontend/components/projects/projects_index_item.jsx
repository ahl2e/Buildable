import React from 'react';
import {Link} from 'react-router-dom';


const ProjectIndexItem = ({ projects }) => {
  return (
  <li className="project-index-item">
    <Link to={`/projects/${projects.id}`}>
      <div className="test-photo">
        <img src={`${projects.imageUrl}`} />
      </div>
      <div className="index-item-footer">
      <span className="title">{projects.title}</span>
      <span className="author"> by: {projects.username}</span>
      </div>
    </Link>
  </li>
);
}
export default ProjectIndexItem;
