class CreateReplies < ActiveRecord::Migration[5.2]
  def change
    create_table :replies do |t|
      t.integer :comment_id
      t.integer :user_id
      t.string :title
      t.text :body
    end
    add_index :replies, :comment_id
    add_index :replies, :user_id
  end
end
