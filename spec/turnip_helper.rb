# frozen_string_literal: true

require "spec_helper"
require "rails_helper"
require "capybara/rspec"
require "turnip/rspec"
require "turnip/capybara"

RSpec.configure do |config|
  config.raise_error_for_unimplemented_steps = true
end

require_relative "features/support/initializers/capybara_driver"
require_relative "features/support/initializers/database_cleaner"
require_relative "features/support/initializers/delay"

Dir.glob("spec/features/**/*steps.rb") { |file| load(file, true) }
