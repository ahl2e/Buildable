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
      // <img src={projects.image_url} alt={projects.name} />
      <span>{projects.title}</span>
      <p>by:</p><span>{projects.username}</span>
    </Link>
  </li>
);
export default ProjectIndexItem;
