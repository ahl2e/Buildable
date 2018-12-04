@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project do
      json.extract! @project.user, :username
      json.imageUrl url_for(@project.picture)
    end
    json.reviewIds []
  end
end

@projects.each do |project|
  json.set! project.id do
    json.extract! project, :title, :description, :category
    json.extract! project.user, :username
    json.imageUrl url_for(project.picture)

  end
end
