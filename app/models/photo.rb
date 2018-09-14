# == Schema Information
#
# Table name: photos
#
#  id             :bigint(8)        not null, primary key
#  photo_url      :string
#  imageable_type :string
#  imageable_id   :bigint(8)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Photo < ApplicationRecord

  belongs_to :imageable, polymorphic: true
end
