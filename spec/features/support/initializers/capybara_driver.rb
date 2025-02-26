# frozen_string_literal: true

require "selenium-webdriver"

Capybara.server_port = ENV.fetch("TURNIP_RAILS_CONTAINER_PORT")
Capybara.server_host = IPSocket.getaddress(Socket.gethostname)
Capybara.app_host = "http://#{IPSocket.getaddress(Socket.gethostname)}:#{Capybara.server_port}"

Capybara.register_driver :docker_selenium_chrome do |app|
  options = Selenium::WebDriver::Chrome::Options.new

  options.add_argument(%(window-size=1800,1000))
  options.add_argument("whitelisted-ips=#{Capybara.server_host}")

  driver = Capybara::Selenium::Driver.new(
    app,
    browser: :remote,
    url: %(http://#{ENV.fetch("CHROME_CONTAINER_HOST")}:#{ENV.fetch("CHROME_CONTAINER_PORT")}/wd/hub),
    options: options
  )

  driver
end

Capybara.default_driver = :docker_selenium_chrome
