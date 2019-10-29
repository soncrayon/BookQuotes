class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.string :title
      t.text :content
      t.string :image
      t.references :author, foreign_key: true
      t.references :genre, foreign_key: true

      t.timestamps
    end
  end
end
