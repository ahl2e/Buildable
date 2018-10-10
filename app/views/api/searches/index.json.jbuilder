@projects.each do |project|
  json.set! project.id do
    # json.partial! 'api/projects/project', project: project do
      json.extract! project, :id, :title, :description
      json.imageUrl url_for(project.picture)
    # end
  end
end
