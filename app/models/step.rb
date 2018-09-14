# == Schema Information
#
# Table name: steps
#
#  id         :bigint(8)        not null, primary key
#  project_id :integer
#  heading    :string
#  body       :text
#

class Step < ApplicationRecord

end
