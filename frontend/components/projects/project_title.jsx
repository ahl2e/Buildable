import React from 'react';
import { withRouter} from 'react-router-dom';

class ProjectTitleForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {title:"", category: null, imageFile: null, userId: this.props.userId};
  }

  updateTitle(){
    return (e) => {
      var newTitle = this.state.title;
      newTitle = e.target.value;
      this.setState({title: newTitle});
    };
  }

  handleTitle(e){
    e.preventDefault();
    this.props.carryPayload(this.state);
    this.props.closeModal();
  }

  render(){

    return(
      <div id='title-modal'>
        <div id='title-header-image'>
        </div>
        <div id='title-footer'>
        <form onSubmit={this.handleTitle.bind(this)} id='title-form-background'>
          <p>I made a project called:</p>
          <input type="text" onChange={this.updateTitle()} value={this.state.title} id='title-modal-input'/>
          <input type="submit" value="Start Project >>" className='title-submit'/>
        </form>
      </div>
      </div>
    );
  }
};

export default withRouter(ProjectTitleForm);
