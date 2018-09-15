import React from 'react';
import {Link} from 'react-router-dom';

// const ProjectIndexItem = ({projects}) => (
//   <li className="project-index-item">
//     <Link to={`/projects/${projects.id}`}>
//       // <img src = {'assets/Test_Dumy.png'}
//       <span>{projects.id}</span>
//         {projects.title}
//         {projects.description}
//       <span>{projects.name}</span>
//     </Link>
//   </li>
// );


const ProjectIndexItem = ({ projects }) => (
  <li className="project-index-item">
    <Link to={`/projects/${projects.id}`}>
      <div className="test-photo">
      </div>
      // <img src={projects.image_url} alt={projects.name} />
      <div className="index-item-footer">
      <span className="title">{projects.title}</span>
      <span className="author"> by: {projects.username}</span>
      </div>
    </Link>
  </li>
);
export default ProjectIndexItem;
