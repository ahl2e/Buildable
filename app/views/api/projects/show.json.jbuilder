json.partial! "api/projects/project", project: @project

json.project do
  json.extract! @project, :title, :description
  json.imageUrl url_for(@project.picture)
  json.extract! @project.user, :username
  # json.extract! @project.comments, :title, :body, :user_id
end
