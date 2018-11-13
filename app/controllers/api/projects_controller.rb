class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
      if @project.save
        render json: @project
      else
        render json: @project.errors.full_messages
      end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end

  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end

  def index
    @projects = Project.all.with_attached_picture

  end

  def show
    @project = Project.find(params[:id])
  end


  private

  def project_params
    params.require(:project).permit(:user_id, :title, :description, :picture, :id)
  end
end
