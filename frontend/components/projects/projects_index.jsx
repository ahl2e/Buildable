import React from 'react';
import ProjectIndexItem from './projects_index_item';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects:null};
  }

  componentWillMount() {
    localStorage.getItem('projects') && this.setState({
      projects: JSON.parse(localStorage.getItem('projects'))
    })
  }

  componentDidMount() {
    if (!localStorage.getItem("projects")){
      this.props.fetchProjects(),this.setState({projects: JSON.parse(localStorage.getItem('projects'))});
    }
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('projects', JSON.stringify(nextProps.projects));
  }


render(){
    // if (this.state.projects){
    //   const proj = this.state.projects.map((project) => <ProjectIndexItem key={project.id}  projects={project} />);
    // }

return(
  <div>
  <section id="landing-image">
    <div id="landing-text">
    <h1 id="changing-text">Let's Build a ________</h1>
    <script>
      document.getElementById("changing-text").innerHTML = "test";
    </script>
    </div>
  </section>
  <section className="projects-index-container">
    <ul className="projects-index-list">
      {this.state.projects.map((project) => <ProjectIndexItem key={project.id}  projects={project} />)}
    </ul>
  </section>
</div>
);
}

}


export default ProjectsIndex;
