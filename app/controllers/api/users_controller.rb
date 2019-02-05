class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
  end

  def update
    @user = User.find(params[:id])
    if @user.photo
       @user.photo.attach(user_params[:photo])
    end

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :photo)
  end
end
