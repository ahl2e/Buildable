class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.integer :category_id
      t.string :title
      t.text :description
      t.timestamps
    end

    add_index :projects, :user_id
  end
end
