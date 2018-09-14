class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :project_id
      t.integer :user_id
      t.string :title
      t.text :body
    end
    add_index :comments, :project_id
    add_index :comments, :user_id
  end
end
