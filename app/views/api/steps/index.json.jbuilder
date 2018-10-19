# @steps.each do |step|
#   json.set! step.id do
#     json.partial! 'step', step: step do
#       json.extract! step, :heading, :body
#     end
#     json.reviewIds []
#   end
# end

@steps.each do |step|
  json.set! step.id do
  json.extract! step, :heading, :body, :project_id, :order_number, :id, :user
  if step.picture.attached?
    json.imageUrl url_for(step.picture)
  end
  end
end
