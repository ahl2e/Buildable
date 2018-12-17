
![Buildable logo](https://github.com/ahl2e/Buildable/raw/master/app/assets/images/instructables-logo.png)

# Buildable

![Buildable logo](https://github.com/ahl2e/Buildable/raw/master/app/assets/images/Screenshot.jpg)

Inspired by Instructables, Buildable is a full stack web application that allows makers to share their personal DIY projects and the steps they took to complete them.  Other users can then browse the growing catalogue of projects and learn from the community of makers.

Link to live app: (https://buildable.herokuapp.com)

## Technologies

+ Ruby on rails - A framework for building ruby based web apps using a Postgres Database
+ jQuery Ajax - allows asynchronous calls to the backend database without interfering with the front end experience
+ React - Dynamically generates front-end experience allowing for fluid single-page apps.
+ React-Quill - In-browser text editor.   


#### Projects

Each Project includes a photo of the finished project, the steps required to reach that final stage, and corresponding photos for each step in the project.  Photos are stored using AWS S3 cloud storage and Rails Active Storage allowing for easy uploads and simple, reliable access.  All projects are associated with a user using user_id as the foreign key.

Projects and Steps are entered concurrently.  The information for the Project as well as each step is stored in front-end state.  When the user submits his/her project, an AJAX request is dispatched to store the project.  Using the response's project id, the array of steps is mapped over and dispatches an AJAX request for each step.

```javascript
handleSubmit(e){
  e.preventDefault();
  const projectData = new FormData();
  projectData.append('project[title]', this.state.project.title);
  projectData.append('project[description]', this.state.project.description);
  projectData.append('project[user_id]', this.state.project.user_id);
  if (this.state.image.imageFile) {
   projectData.append('project[picture]', this.state.image.imageFile);
 }
  if (this.state.id) {
   projectData.append('project[id]', this.state.project.id);
 }

 if (this.props.formType == "Update Project"){
   this.props.action(this.state.project).then(() => this.props.history.push(`/projects/${this.props.match.params.projectId}`));

 } else {
   var existingProjects = JSON.parse(sessionStorage.getItem('projects'));
   var newProjects = existingProjects.push(this.state.project);
   sessionStorage.clear();
   let projectId;
   this.props.action(projectData).then((response) => {
     this.state.steps.forEach((step) => {
       if (step.heading != "" && step.body != ""){
         projectId = response.project.id;
         const newStep = new FormData();
         newStep.append('step[project_id]',response.project.id);
         newStep.append('step[heading]',step.heading);
         newStep.append('step[body]',step.body);
         if(step.imageFile){
           newStep.append('step[picture]',step.imageFile);
         }
         this.props.createStep(newStep);
       }
     });
   }).then(() => this.props.history.push(`/projects/${projectId}`));
 }
}
```



#### Comments
  Users have the ability to leave comments on projects saved to the site.  Comments allow users to create a community of makers by asking questions, offering advice, or giving compliments.  Compliments belong to both the project and the user who authored them.  All users can comment on any project.

#### Search
  Search the database for projects matching your interest.  Search currently scans the title of a project, but will soon look at descriptions to find even more possibilities.

  ```Ruby
  def index
    @projects = Project.where("title ILIKE  ?", "%#{search_params[:query]}%").with_attached_picture
  end
  ```
#### Categories
  If a user is interested in a particular type of project, they can browse projects by category.  Categories are stored on each project.  Redux selectors are used to filter through the available projects and return only those belonging to the requested category.

  ```javascript
  export const selectFurnitureProjects = (state) => {
    const furnitureProjects = [];
    const projects = JSON.parse(sessionStorage.projects);
    projects.forEach((project) => {
      if(project.category == 'furniture'){
        furnitureProjects.push(project);
      }
    });
    return furnitureProjects;
  };
  ```

## Planned Improvements

#### Replies

  Soon, users will be able to directly reply to comments.  This will remove the need to directly address each comment.  Users will also receive a notification when they receive comments.

#### Videos

  Projects will soon be able to include imbedded YouTube videos documenting their construction.
