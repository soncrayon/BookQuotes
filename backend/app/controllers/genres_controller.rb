class GenresController < ApplicationController
        def index
                @genres = Genre.all 
                render json: @genres.to_json(:except => [:created_at, :updated_at]) 
        end
end
