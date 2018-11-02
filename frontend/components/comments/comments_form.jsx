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
    const comment = Object.assign({}, {title: this.state.title, body: this.state.body, user_id: this.state.currentUserId, project_id: this.state.match.params.project_Id});
    const project_id = this.state.match.params.project_Id;
    this.props.create(comment).then(() => this.props.history.push(`/`));
    this.setState({
      title: "",
      body: ""
    });
  }


  render(){
    return(
      <div className="projects-form">
        <section className="form-box">
          <div className="inner-form-box">
        <form onSubmit={this.handleSubmit}>
          <p>Comment:</p>

          <br/>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="Comment Title"
            className="comment-title"
            />
          <br/>
          <p>Comment</p>
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Body"
            rows="7"
            cols="80"
            />
          <br/>
          <div className="form-footer">

            <div className="button-container">
              <input className="submit" type="submit" value="submit"/>
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
