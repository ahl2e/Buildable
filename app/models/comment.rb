# == Schema Information
#
# Table name: comments
#
#  id               :bigint(8)        not null, primary key
#  user_id          :integer
#  title            :string
#  body             :text
#  commentable_id   :integer
#  commentable_type :string
#

class Comment < ApplicationRecord
  validates :title, :body, :user_id, presence: true

  belongs_to :commentable, polymorphic: true

end
