import React from 'react';
import ProjectIndexItem from './projects_index_item';
import {Link} from 'react-router-dom';

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
    if (!cachedProjects || cachedProjects.length < 2){
      this.props.fetchProjects();
    }else{
      this.setState({projects: JSON.parse(localStorage.getItem('projects'))});
    }
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.projects){
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
    <h1>Let's Build a ________</h1>
    </div>
    <div className='category-links'>
      <Link to="/categories/furniture">Woodworking</Link>
      <Link to="/categories/metal">Metal</Link>
      <Link to="/categories/technology">Technology</Link>
      <Link to="/categories/pottery">Pottery</Link>
      <Link to="/categories/furniture">Furniture</Link>
      <Link to="/categories/home_improvement">Home Improvement</Link>
      <Link to="/categories/lighting">Lighting</Link>
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
