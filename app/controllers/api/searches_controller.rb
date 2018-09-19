class Api::SearchesController < ApplicationController
  def index
    @projects = Project.where('title LIKE ?', search_params[:query]);
    render :index
  end

  def search_params
    params.require(:search).permit(:project_id, :query)
  end
end
