class QuotesController < ApplicationController
        def index
                @quotes = Quote.all 
                render json: @quotes.to_json(:include => {:author => {:only => [:name]} , :genre => {:only => [:name]}},
                :except => [:created_at, :updated_at])
        end

        def create   
                @quote = Quote.new(title:params[:title], content:params[:content], image:params[:image], genre_id:params[:genre], author_id:(Author.create(name:params[:author])).id)  
                if @quote.save
                        render json: @quote.to_json(:include => {:author => {:only => [:name]} , :genre => {:only => [:name]}},
                                :except => [:created_at, :updated_at])
                else
                        render json: ("Quote not saved successfully.").to_json
                end
        end

        def destroy
                @quote = Quote.find(params[:id])
                @quote.destroy 
                render json: ("That quote was deleted successfully.").to_json 
        end

end
