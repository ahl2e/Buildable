import React from 'react';
import ReactQuill from 'react-quill';


class StepFormModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {step: props.step, idx: this.props.idx};
    this.handleStepFile = this.handleStepFile.bind(this);
  }

  updateStepField(field,idx){
    return (e) => {
      const newStep = this.state.step;
      newStep[field] = e.target.value;
      this.setState({step: newStep});
    };
  }

  updateStepQuillField(field){
    return (e) => {
      const newStep = this.state.step;
      newStep[field] = e;
      this.setState({step: newStep});
    };
  }

  renderStepForm(step){
    var formats = [
        "bold",
        "italic",
        "link",
        "strike",
        "script",
        "underline",
        "header",
        "list",
        "blockquote",
        "code-block"
      ];
    return(

      <form onSubmit={this.handleStepSubmit} className='steps-editor-modal-form'>
        <div className='steps-editor-form-text'>
          <textarea
            onChange={this.updateStepField('heading')}
            value={step.step.heading}
            placeholder="Step Heading"
            id='step-heading-field'
            rows="1"
            cols="80"/>
          <ReactQuill
            onChange={this.updateStepQuillField('body')}
            id='quill-body'
            value={step.step.body}
            theme="snow"
            placeholder="Step Body"
            modules={StepFormModal.modules}/>
        </div>

      </form>
    )
  }

  submitEdit(e){
    e.preventDefault;
    this.props.carryPayload(this.state);
    this.props.closeModal()
  }

  renderStepUploadButton(step){
    if (step.step.imageUrl){
      debugger
      return(
        <div className='step-image-upload-contianer'>
          <img src={step.step.imageUrl} />
        </div>
      );
    } else {
      return(
        <div className='step-image-upload-contianer'>
          <label>Add Step Picture Here
              <input
                className='inputfile'
                type="file"
                onChange={this.handleStepFile}
                />
          </label>
        </div>
      );
    }
  }

  handleStepFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    var newStep = {step:this.state.step};
    reader.onloadend = () => {
      newStep.imageUrl = reader.result;
      newStep.imageFile = file;
    this.setState({step: newStep});
  };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      var blankStep = {step:{ [imageUrl]: "", [imageFile]: null }};
      this.setState({step: blankStep});
    }
  }

  render(){
    return(
      <div id='step-form-modal'>
        {this.renderStepForm(this.state)}
        <button onClick={this.submitEdit.bind(this)} id='step-modal-button'>Edit Step</button>
      </div>
    )
  }
}

StepFormModal.modules= {
  toolbar: [
      [{ 'header': []}],
      ['bold', 'italic',
      'underline', 'strike',{'script': 'sub'}, {'script': 'super'}],
      ['link','blockquote','code-block'],
      [{'list': 'bullet'}],
      ['clean']
    ],
};

export default StepFormModal;
