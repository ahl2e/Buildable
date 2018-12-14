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
    @step = Step.find(params[:id])
    if @step.update(step_params)
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    render :show
  end

  def show
    @step = Step.find(params[:id])
  end

  def index
    @steps = Step.where(project_id: params[:project_id])
    @steps
  end

  private

  def step_params
    params.require(:step).permit(:project_id, :heading, :body, :order_number, :picture)
  end


end
