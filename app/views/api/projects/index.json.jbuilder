@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project do
      json.extract! @project.user, :username
    end
    json.reviewIds []
  end
end

@projects.each do |project|
  json.set! project.id do
    json.extract! project, :title, :description
    json.extract! project.user, :username
  end
end
