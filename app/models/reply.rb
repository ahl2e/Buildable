# == Schema Information
#
# Table name: replies
#
#  id         :bigint(8)        not null, primary key
#  comment_id :integer
#  user_id    :integer
#  title      :string
#  body       :text
#

class Reply < ApplicationRecord
  validates :comment_id, :body, :user_id, presence: true

  belongs_to :comment,
  primary_key: :id,
  foreign_key: :comment_id,
  class_name: :Comment

  belongs_to : user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
