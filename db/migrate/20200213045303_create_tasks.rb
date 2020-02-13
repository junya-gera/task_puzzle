class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.text :content,  null: false
      t.references :puzzle, foreign_key: true

      t.timestamps
    end
  end
end
