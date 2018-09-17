class Api::StepsController < ApplicationController
  def create
    @step = Step.new(step_params)
    if @step.save
      render json:@step
    else
      render json: @step.errors.full_messages
    end
  end

  def edit
    @step = Project.find(params[:id])

    if @step.update(step_params)
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  def show
    @step = Step.find(params[:id])
  end

  def index
    @steps = Step.where(project_id: params[:project_id])
    # @steps = @steps.select{|step| step.project_id == @project.id}
  end

  private

  def step_params
    params.require(:steps).permit(:project_id, :heading, :body)
  end


end
