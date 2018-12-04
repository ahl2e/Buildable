import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {merge} from 'lodash';

class CommentsForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>{
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, {title: this.state.title, body: this.state.body, user_id: this.state.currentUserId, project_id: parseInt(this.state.match.params.projectId), username: this.state.username});
    const project_id = parseInt(this.state.match.params.projectId);
    this.props.create(comment).then(() => this.props.history.push(`/projects/${project_id}`));
    this.setState({
      title: "",
      body: ""
    });
  }


  render(){
 let errorRenders;
 if (this.props.errors.session.length > 0) {
   errorRenders =
   <div className="comment-errors">
   <ul>
     {this.props.errors.session.map((error, i) => (
       <li key={`error-${i}`}>
         {error}
       </li>
     ))}
   </ul>
 </div>
 } else {
   errorRenders =   <div>
                       <p>We have a be nice policy.</p>
                       <p>Please be positive and constructive.</p>
                     </div>
 }

    return(
      <div className="coments-form">
        <section className="comments-form-box">
          <div className="comments-inner-form-box">
        <form onSubmit={this.handleSubmit}>
        
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="    Post a Comment..."
            rows="7"
            cols="80"
            />
          <br/>
          <div className="comments-form-footer">
            {errorRenders}
            <div id="comments-button-container">
              <input className="submit" type="submit" value="post"/>
            </div>
          </div>

        </form>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouter(CommentsForm);
