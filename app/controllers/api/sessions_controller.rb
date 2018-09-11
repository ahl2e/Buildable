class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
     params[:user][:username],
     params[:user][:password])
   if @user
     login(@user)
     render json: @user
   else
     render json: @user.errors.full_messages, status: 422
   end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {}, status 404
  end
end
