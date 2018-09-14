class MakeCommentsPolymorphic < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :project_id
    add_column :comments, :commentable_id, :integer
    add_column :comments, :commentable_type, :string
  end
end
