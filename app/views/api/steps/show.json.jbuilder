json.partial! "api/projects/project", step: @step

json.step do
  json.extract! @step, :heading, :body
end
