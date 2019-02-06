import React from 'react';
import {Link} from 'react-router-dom';

class DeleteModal extends React.Component {
  constructor(props){
    super(props);
  }

  delete(e){
    sessionStorage.clear();
    this.props.deleteProject(this.props.project).then(this.props.history.push(`/`)).then(sessionStorage.clear()).then(location.reload());;
  }

  render(){
    debugger
    return (
      <div id="add-picture-modal">
        <p>Looks like you forgot to add a picture</p>
        <button onClick={this.props.closeModal}>OK</button>
      </div>
    );
  }
};
export default DeleteModal;
