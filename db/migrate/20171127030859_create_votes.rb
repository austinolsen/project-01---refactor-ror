class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.string :show
      t.string :date
      t.string :img
      t.string :poster
      t.string :overview
      t.string :backdrop
      t.string :user

      t.timestamps
    end
  end
end
