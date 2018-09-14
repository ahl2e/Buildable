class AddOrderNumberToSteps < ActiveRecord::Migration[5.2]
  def change
    add_column :steps, :order_number, :integer
  end
end
