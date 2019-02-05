import React from 'react';
import {Link} from 'react-router-dom';

class AddPictureModal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="add-picture-modal">
        <p>Looks like you forgot to add a picture</p>
        <button onClick={this.props.closeModal}>OK</button>
      </div>
    );
  }
};
export default AddPictureModal;
