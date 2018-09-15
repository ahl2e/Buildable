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
  <div>
  <section className="landing-image">
    <div className= "landing-text">
    <h1>Let's Make Something</h1>
    </div>
  </section>
  <section className="projects-index-container">
    <ul className="projects-index-list">
      {this.props.projects.map((project) => <ProjectIndexItem key={project.id}  projects={project} />)}
    </ul>
  </section>
</div>
);
}

}


export default ProjectsIndex;
