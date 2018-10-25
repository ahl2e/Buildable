class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json:@comment
    else
      render json: @comment.errors.full_messages
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def index
    @comments = Step.where(project_id: params[:project_id])
  end

  def edit
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end
end
