@comments.each do |comment|
  json.set! comment.id do
  json.extract! comment, :title, :body, :project_id, :user_id
  end
end
