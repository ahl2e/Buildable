class AddCategoryToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :category, :string
  end
end
