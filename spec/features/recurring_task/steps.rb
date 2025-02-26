# frozen_string_literal: true

steps_for :"features/recurring_task" do
  step "a user" do
    # Do nothing for now...
  end

  step "seeded projects and tasks" do
    CreateSeeds.new(
      json: {
        projects: [
          {
            name: "CodeFlow - Real-time Collaborative Coding Platform",
            tasks: [
              "Develop real-time code synchronization feature",
              "Implement user authentication and role management"
            ]
          },
          {
            name: "CyberShield - AI-powered Cybersecurity Monitoring System",
            tasks: [
              "Set up real-time threat detection using machine learning",
              "Implement a firewall and intrusion detection system"
            ]
          }
        ]
      }
    ).call
  end

  step "the user navigates to the tasks page" do
    visit("/")

    @initial_page_load_at = page.find(%([data-test-id="page-loaded-at"]), visible: false)["data-value"]
  end

  step "the user waits for 2 minutes" do
    create_new_task
  end

  step "the user waits for 2 minutes again" do
    create_new_task
  end

  step "new task is added for each project to the top of the list" do
    tasks = page.all(%([data-test-id="task"])) if page.has_css?(%([data-test-id="task"]))

    expect(tasks.first(2).all? { |task| task.text.include?("New Task") }).to eq(true)
  end

  step "each new task has hardcoded name of \"New Task\" + current timestamp" do
    tasks = page.all(%([data-test-id="task"])) if page.has_css?(%([data-test-id="task"]))

    expect(tasks.first(2).all? { |task| task.text.match?(/New Task \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/) }).to eq(true)
  end

  step "the UI is automatically updated without page refresh" do
    expect(@initial_page_load_at).to eq(page.find(%([data-test-id="page-loaded-at"]), visible: false)["data-value"])
  end

  def create_new_task
    CreateNewTasks.new.call
  end
end
