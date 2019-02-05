import React from 'react';
import { withRouter} from 'react-router-dom';

class ProjectTitleForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {title:"", category: "", imageFile: null, userId: this.props.userId};
  }

  updateTitle(){
    return (e) => {
      var newTitle = this.state.title;
      newTitle = e.target.value;
      this.setState({title: newTitle});
    };
  }

  updateCategory(){
    return (e) => {
      var newCategory = this.state.category;
      newCategory = e.target.value;
      this.setState({category: newCategory});
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
            <select value={this.state.category} onChange={this.updateCategory()} className='category-dropdown'>
              <option value="" disabled>Choose a Category</option>
              <option value="woodworking">Woodworking</option>
              <option value="metal">Metal</option>
              <option value="technology">Technology</option>
              <option value="furniture">Furniture</option>
              <option value="lighting">Lighting</option>
              <option value="misc">misc</option>
            </select>
          <input type="submit" value="Start Project >>" className='title-submit'/>
        </form>
      </div>
      </div>
    );
  }
};

export default withRouter(ProjectTitleForm);
