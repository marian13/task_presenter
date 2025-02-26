class CreateNewTasks
  def call
    Project.ids.each do |project_id|
      task = Task.create(project_id:, name: "New Task #{Time.current.iso8601}")

      TaskPresenterSchema.subscriptions.trigger(:on_task_created, {}, {task: task})
    end
  end
end
