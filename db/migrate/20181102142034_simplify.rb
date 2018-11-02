class Simplify < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :commentable_id
    remove_column :comments, :commentable_type
    add_column :comments, :project_id, :integer
  end
end
