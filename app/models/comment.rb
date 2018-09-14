# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  project_id :integer
#  user_id    :integer
#  title      :string
#  body       :text
#

class Comment < ApplicationRecord

end
