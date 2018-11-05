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
validate :ensure_picture

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

has_many :steps,
primary_key: :id,
foreign_key: :project_id,
class_name: :Step

has_many :comments,
primary_key: :id,
foreign_key: :project_id,
class_name: :Comment

has_one_attached :picture

# has_many :photos, as: :imageable
# primary_key: :id,
# foreign_key: :project_id,
# class_name: :Photo

has_one_attached :picture


def ensure_picture
  unless self.picture.attached?
    errors[:picture] << "must be atached."
  end
end


end
