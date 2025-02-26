class CreateNewTasksJob
  include Sidekiq::Job

  def perform
    CreateNewTasks.new.call
  end
end
