class Api::CategoriesController < ApplicationController
  def index
    # debugger
    @projects = Project.where("category = ?", "%#{category_params[:query]}%").with_attached_picture
  end

  def category_params
    params.require(:projects).permit(:query)
  end
end
