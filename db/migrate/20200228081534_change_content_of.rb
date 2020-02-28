class ChangeContentOf < ActiveRecord::Migration[5.2]
  def change
    change_column_null :tasks, :content, true
  end
end
