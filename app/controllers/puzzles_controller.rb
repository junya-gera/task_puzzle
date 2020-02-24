class PuzzlesController < ApplicationController

  def new
    @puzzle = Puzzle.new
  end

  def create
    binding.pry
    Puzzle.create(puzzle_params)
  end
  
private
  def puzzle_params
    params.requre(:puzzle).permit(:title).merge(user_id: current_user.id)
  end
  
end
