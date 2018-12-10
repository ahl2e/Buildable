class Api::RepliesController < ApplicationController

  def create
    @reply = Reply.new(reply_params)
    if @reply.save
      render json:@reply
    else
      render json:@reply.errors.full_messages, status: 422
  end

  def show
    @reply = Reply.find(params[:id])
  end

  def index
    @replies = Reply.where(comment_id: params[:comment_id])
  end

  def destroy
    @reply = Reply.find(params[:id])
    if @reply
      @reply.destroy
    else
      render json:["no such reply"], status: 400
    end
  end

  def reply_params
    params.require(:reply).permit(:title, :body, :user_id, :comment_id, :username)
  end
end
