class Api::SearchesController < ApplicationController
  def index
    @projects = Project.where("title ILIKE  ?", "%#{search_params[:query]}%").with_attached_picture
  end

  def search_params
    params.require(:projects).permit(:query)
  end
end
