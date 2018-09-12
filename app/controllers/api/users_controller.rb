class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages
      end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
