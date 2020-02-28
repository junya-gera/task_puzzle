class TasksController < ApplicationController

  def create
    @task = Task.create(task_params)
    redirect_to root_path
  end

  private
    def task_params
      params.require(:task).permit(:content)
    end


end