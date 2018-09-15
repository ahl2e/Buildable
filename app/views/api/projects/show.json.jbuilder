json.partial! "api/projects/project", project: @project

json.project do
  json.extract! @project, :title, :description
  json.extract! @project.user, :username 
end
