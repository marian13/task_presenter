class CreateSeeds
  attr_reader :json

  def initialize(json:)
    @json = json
  end

  def call
    json[:projects].each do |project_attributes|
      project = Project.find_or_create_by(name: project_attributes[:name])

      project_attributes[:tasks].each do |task|
        Task.find_or_create_by(name: task, project: project)
      end
    end
  end
end
