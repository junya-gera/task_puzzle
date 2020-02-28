class PuzzlesController < ApplicationController

  def create
    @puzzle = Puzzle.new(puzzle_params)
    @puzzle.save
    redirect_to root_path
  end
  
private
  def puzzle_params
    params.require(:puzzle).permit(:title).merge(user_id: current_user.id)
  end
  
end
