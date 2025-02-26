# frozen_string_literal: true

module Types
  class TaskType < Types::BaseObject
    description "A task"

    field :id, ID, null: false
    field :name, String
    field :project, ProjectType

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
