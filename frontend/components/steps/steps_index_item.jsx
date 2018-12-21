import React from 'react';
import { Link } from 'react-router-dom';

class StepsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.step;
    this.stepNumber = props.stepNumber;
  }

  componentWillUpdate(nextProps){
    if(nextProps.step.imageUrl && nextProps.step.imageUrl != this.props.step.imageUrl){
      console.log('new image');
      this.setState({imageUrl:nextProps.step.imageUrl});
    }
  }

  delete(e){
    this.props.delete(this.props.step);
  }

  toggleDropDown(e){
    $(`#step-edit-container-${e.target.id}`).toggleClass('step-no-show');
  }

  hideDropDown(e){
    $(`#step-edit-container-${e.target.id}`).addClass('step-no-show');
  }

  renderEditContainer(){
    if (this.state.user && Object.values(this.props.currentUserId).length > 0 && Object.values(this.props.currentUserId)[0].id == this.state.user.id){
      return(
      <div>
        <button onClick={this.toggleDropDown} id={`${this.props.step.id}`} className='edit-drop'>edit this step</button>
          <div
            className='step-no-show'
            id={`step-edit-container-${this.props.step.id}`}
            onMouseLeave={this.hideDropDown}
            >
            <button value="Delete Step" className="delete-button" onClick={this.delete.bind(this)}>Delete Step</button>
            <Link to={`/projects/${this.state.project_id}/${this.state.id}/edit`} id="step-edit">Edit Step</Link>
        </div>
      </div>
    )};
  }

  render() {

    const pic = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
  return(
    <li>
      <h3>Step {this.stepNumber}: {this.state.heading}</h3>
      {pic}
      <div className="step-index-body"
        dangerouslySetInnerHTML={{ __html: this.state.body }}>
      </div>
        {this.renderEditContainer()}
        <br/>
        <div id="line-box"></div>
    </li>
    );
  }
};

export default StepsIndexItem;
