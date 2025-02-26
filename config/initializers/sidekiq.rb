url =
  if Rails.env.development?
    ENV.fetch("REDIS_URL") + "/0"
  elsif Rails.env.test?
    ENV.fetch("REDIS_URL") + "/1"
  end

Sidekiq.configure_server do |config|
  config.redis = {url:}
end

Sidekiq.configure_client do |config|
  config.redis = {url:}
end
