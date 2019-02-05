import React from 'react';
import { Link } from 'react-router-dom';
import MyProjectsContainer from '../projects/my_projects_container';

class UserPage extends React.Component {
  constructor(props){
    super(props);
    this.state = props.user;
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({photo: { imageUrl: reader.result, imageFile: file}});
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({photo:{ [imageUrl]: "", [imageFile]: null }});
    }
  }

  renderUploadButton(){
    if (this.state.photo.imageUrl){
      return(
        <div className='image-upload-contianer'>
          <img src={this.state.photo.imageUrl} />
          <label>Change Picture
              <input
                className='inputfile'
                type="file"
                onChange={this.handleFile.bind(this)}
                />
              </label>
        </div>
      );
    } else {
      return(
        <div className='image-upload-contianer'>
          <label>Click to Add a Picture
              <input
                className='inputfile'
                type="file"
                onChange={this.handleFile.bind(this)}
                />
          </label>
        </div>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    const image = this.state.image;
    const id = this.state.id;
    formData.append('user[photo]', image);
    formData.append('user[id]', this.state.id);
    formData.append('user[username]', this.state.username);
    debugger

    this.props.edit(id,formData);
  }

  render(){

    return(
      <div id='user-profile-page'>
        <h2>Hey look, a user</h2>
        {this.state.username}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="submit" value="Update User"/>
          {this.renderUploadButton()}
        </form>
        <MyProjectsContainer/>
      </div>
    )
  }

}

export default UserPage;
