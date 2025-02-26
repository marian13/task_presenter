# DatabaseCleaner[:redis].db = ENV.fetch("")

# RSpec.configure do |config|
#   config.use_transactional_fixtures = false

#   config.before(:suite) do
#     DatabaseCleaner[:active_record].clean_with(:truncation)
#     DatabaseCleaner[:redis].clean_with(:deletion)
#   end

#   # config.before(:each) do
#   #   DatabaseCleaner.strategy = :transaction
#   # end

#   config.before(:each, type: :feature) do
#     DatabaseCleaner[:active_record].strategy = :truncation
#     DatabaseCleaner[:redis].strategy = :deletion
#   end

#   config.before(:each) do
#     DatabaseCleaner.start
#   end

#   config.append_after(:each) do
#     DatabaseCleaner.clean
#   end
# end
