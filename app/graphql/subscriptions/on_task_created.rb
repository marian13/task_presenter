module Subscriptions
  class OnTaskCreated < Subscriptions::BaseSubscription
    description "A task was created"

    field :task, Types::TaskType, null: false
  end
end
