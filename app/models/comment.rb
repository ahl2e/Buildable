# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  title      :string
#  body       :text
#  project_id :integer
#

class Comment < ApplicationRecord
  validates :project_id, :title, :body, :user_id, presence: true

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

end
