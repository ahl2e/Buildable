import React from 'react';
import ProjectIndexItem from './projects_index_item';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: null};
  }

  componentWillMount() {
    localStorage.getItem('projects') && this.setState({
      projects: JSON.parse(localStorage.getItem('projects'))
    });
  }

  componentDidMount() {
    const cachedProjects = localStorage.getItem("projects");
    if (!cachedProjects || cachedProjects.length == 0){
      this.props.fetchProjects();
    }else{
      this.setState({projects: JSON.parse(localStorage.getItem('projects'))});
    }
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.projects){
      // debugger
      localStorage.setItem('projects', JSON.stringify(nextState.projects));
    } else {
      localStorage.setItem('projects', JSON.stringify(nextProps.projects));
    }
  }


render(){
    if (this.state.projects && this.state.projects.length != 0){
      var proj = this.state.projects.map((project) => <ProjectIndexItem key={project.id}  projects={project} />);
    } else{
      var proj = this.props.projects.map((project) => <ProjectIndexItem key={project.id}  projects={project} />);
    }
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
      {proj}
    </ul>
  </section>
</div>
);
}

}


export default ProjectsIndex;
