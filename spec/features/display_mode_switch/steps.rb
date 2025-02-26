# frozen_string_literal: true

steps_for :"features/display_mode_switch" do
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
  end

  step "tasks are presented as a vertical list" do
    verify_vertical_list
  end

  step "rest of the tasks are presented as a vertical list" do
    verify_vertical_list
  end

  step "the user clicks on the switch" do
    switch = page.find(%([data-test-id="switch"])) if page.has_css?(%([data-test-id="switch"]))

    switch.click
  end

  step "tasks are presented as a horizontal grid" do
    verify_horizontal_grid
  end

  step "all of the tasks are presented as a horizontal grid" do
    verify_horizontal_grid
  end

  step "the user clicks on the switch again" do
    switch = page.find(%([data-test-id="switch"])) if page.has_css?(%([data-test-id="switch"]))

    switch.click
  end

  step "the user reloads the page" do
    page.refresh
  end

  step "all projects are selected" do
    projects = page.all(%([data-test-id="project"])) if page.has_css?(%([data-test-id="project"]))

    expect(projects.all?(&:checked?)).to eq(true)
  end

  step "the user selects the first project" do
    projects = page.all(%([data-test-id="project"])) if page.has_css?(%([data-test-id="project"]))

    projects.first.check
  end

  step "the user deselects the first project" do
    projects = page.all(%([data-test-id="project"])) if page.has_css?(%([data-test-id="project"]))

    projects.first.uncheck
  end

  step "first project tasks are shown" do
    project = page.first(%([data-test-id="project"])) if page.has_css?(%([data-test-id="project"]))
    tasks = page.all(%([data-test-id="task"])) if page.has_css?(%([data-test-id="task"]))

    expect(tasks.any? { |task| task.text.include?(project[:name]) }).to eq(true)
  end

  step "first project tasks are hidden" do
    project = page.first(%([data-test-id="project"])) if page.has_css?(%([data-test-id="project"]))
    tasks = page.all(%([data-test-id="task"])) if page.has_css?(%([data-test-id="task"]))

    expect(tasks.all? { |task| task.text.exclude?(project[:name]) }).to eq(true)
  end

  def verify_vertical_list
    table = page.find(%([data-test-id="table"])) if page.has_css?(%([data-test-id="table"]))
    row = table.first(%(article)) if table.has_css?(%(article))

    expect(row.style(:display)["display"]).to eq("block")
  end

  def verify_horizontal_grid
    table = page.find(%([data-test-id="table"])) if page.has_css?(%([data-test-id="table"]))
    row = table.first(%(article)) if table.has_css?(%(article))

    expect(row.style(:display)["display"]).to eq("inline-block")
  end
end
