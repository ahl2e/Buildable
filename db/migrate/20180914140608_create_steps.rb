class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.integer :project_id
      t.string :heading
      t.text :body
    end
  end
end
