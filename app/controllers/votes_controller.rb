class VotesController < ApplicationController
  def index
    @votes = Vote.all
  end

  def show
    vote_id = params[:id]
    @vote = Vote.find_by_id(vote_id)
  end

  def new
    @vote = Vote.new
  end

  def edit
    vote_id = params[:id]
    @vote = Vote.find_by_id(vote_id)
  end

  def create
    vote = Vote.new(vote_params)
    redirect_to vote_path
  end

  def update
    vote_id = params[:id]
    vote = Vote.find_by_id(vote_id)
    vote.update_attributes(vote_params)
    redirect_to vote_path(vote)
  end

  def destroy
    vote_id = params[:id]
    vote = Vote.find_by_id(vote_id)
    vote.destroy
    redirect_to votes_path
  end

  private

  def vote_params
    params.require(:vote).permit(:show, :date, :img, :poster, :overview, :backdrop, :user)
  end
end
