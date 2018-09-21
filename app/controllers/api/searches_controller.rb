class Api::SearchesController < ApplicationController
  def index
    @projects = Project.where("title ILIKE  ?", "%#{search_params[:query]}%");
    render :index
  end

  def search_params
    params.require(:projects).permit(:query)
  end
end
