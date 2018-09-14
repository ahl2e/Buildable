# == Schema Information
#
# Table name: steps
#
#  id           :bigint(8)        not null, primary key
#  project_id   :integer
#  heading      :string
#  body         :text
#  order_number :integer
#

class Step < ApplicationRecord
  belongs_to :project,
  primary_key: :id,
  foreign_key:  :project_id,
  class_name: :Project

  has_many :comments, as: :commentable
  # primary_key: :id,
  # foreign_key: :project_id,
  # class_name: :Comment

  has_many :photos, as: :imageable
end
