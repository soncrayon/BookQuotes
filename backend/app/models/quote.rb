class Quote < ApplicationRecord
  belongs_to :author, required: false
  belongs_to :genre, required: false
end
