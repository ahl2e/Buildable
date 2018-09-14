class ProojectsController < ApplicationController
  def create
    @project = Project.new(project_params)
      if @project.save
        render json: project
      else
        render json: @project.errors.full_messages
      end
  end

  def edit

  end

  def destroy

  end


  private

  def project_params
    params.require(:projects).permit(:user_id, :title, :description)
  end
end
