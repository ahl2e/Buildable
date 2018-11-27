class AddUsernameToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :username, :string
  end
end
