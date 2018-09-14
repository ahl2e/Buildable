# == Schema Information
#
# Table name: projects
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer
#  category_id :integer
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
validates :title, :description, :user_id, presence: true

belongs_to :users,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

has_many :steps,
primary_key: :id,
foreign_key: :step_id,
class_name: :Step

has_many :photos,
primary_key: :id,
foreign_key: :photo_id,
class_name: :Photo

has_many :comments,
primary_key: :id,
foreign_key: :comment_id,
class_name: :Comment

end
