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

class User < ApplicationRecord
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :comments, as: :commentable

  has_many :projects,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Project

  has_one_attached :photo

  attr_reader :password

  after_initialize :ensure_session_token


  def self.find_by_credentials(username, password)
     @user = User.find_by(username: username)
     return nil unless @user
     @user.is_password?(password) ? @user : nil
   end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
   @password = password
   self.password_digest = BCrypt::Password.create(password)
 end

  def generate_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token = generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

end
