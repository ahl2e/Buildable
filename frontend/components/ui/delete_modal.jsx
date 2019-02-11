import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter, Redirect} from 'react-router-dom';


class DeleteModal extends React.Component {
  constructor(props){
    super(props);
  }

  delete(e){
    sessionStorage.clear();
    this.props.deleteProject(this.props.project).then(this.props.history.push(`/`)).then(sessionStorage.clear()).then(location.reload());
  }

  render(){
    return (
      <div id="add-picture-modal">
        <p>Are you sure you want to delete this project?</p>
        <button onClick={this.delete.bind(this)}>Yes</button>
        <button onClick={this.props.closeModal}>No</button>
      </div>
    );
  }
};
export default withRouter(DeleteModal);
