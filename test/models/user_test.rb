# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  email           :string
#  timestamps      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  thumbnail_id    :integer
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
