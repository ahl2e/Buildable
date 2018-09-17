import React from 'react';
import { Link, Route } from 'react-router-dom';

const ProjectShow = (props) => {

  return (

    <div className="project-show">
      <div className="show-header">
      <div className="title">{props.project.title}</div>
      <div className="description">{props.project.description}</div>
    </div>
      <Link to={`/projects/${props.project.id}/edit/`}>Edit</Link>
      <br/>
      <Link to={"/"}>back to all projects</Link>
    </div>
  )
};

export default ProjectShow;
