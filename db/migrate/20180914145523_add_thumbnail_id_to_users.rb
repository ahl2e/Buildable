class AddThumbnailIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :thumbnail_id, :integer
  end
end
