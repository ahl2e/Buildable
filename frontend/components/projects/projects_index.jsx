import React from 'react';
import ProjectIndexItem from './projects_index_item';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

render(){
  // const {projects} = this.props.projects;

return(
  <section className="projects-index-container">
    <ul className="projects-index-list">
      {this.props.projects.map((project) => <ProjectIndexItem key={project.id}  projects={project} />)}
    </ul>
</section>
);
}

}


export default ProjectsIndex;
