source "https://rubygems.org"

gem "bootsnap", require: false
gem "graphql", "~> 2.4"
gem "importmap-rails"
gem "jbuilder"
gem "jsbundling-rails", "~> 1.3"
gem "mysql2", "~> 0.5"
gem "propshaft"
gem "puma", ">= 5.0"
gem "rails", "~> 8.0.1"
gem "redis", "~> 5.4"
gem "sidekiq", "~> 7.3"
gem "sidekiq-cron", "~> 2.1"
gem "stimulus-rails"
gem "turbo-rails"
gem "tzinfo-data", platforms: %i[windows jruby]

group :development do
  gem "graphiql-rails"
  gem "standardrb", "~> 1.0"
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "database_cleaner-active_record"
  gem "database_cleaner-redis"
  gem "selenium-webdriver"
  gem "turnip"
end

group :development, :test do
  gem "debug", platforms: %i[mri windows], require: "debug/prelude"
  gem "rspec-rails", "~> 7.0.0"
end
