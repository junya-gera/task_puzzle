class CreatePuzzles < ActiveRecord::Migration[5.2]
  def change
    create_table :puzzles do |t|
      t.string        :title,      null: false
      t.index       :title,      unique: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
