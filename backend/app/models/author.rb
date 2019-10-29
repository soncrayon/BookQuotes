class Author < ApplicationRecord
        has_many :quotes
        has_many :genres, through: :quotes 
end
