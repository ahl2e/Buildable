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

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

has_many :steps,
primary_key: :id,
foreign_key: :project_id,
class_name: :Step

has_many :photos, as: :imageable
# primary_key: :id,
# foreign_key: :project_id,
# class_name: :Photo

has_many :comments, as: :comentable
# primary_key: :id,
# foreign_key: :project_id,
# class_name: :Comment



end
