module Types
  class SubscriptionType < Types::BaseObject
    field :on_task_created, subscription: Subscriptions::OnTaskCreated
  end
end
