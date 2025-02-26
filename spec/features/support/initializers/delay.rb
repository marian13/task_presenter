# frozen_string_literal: true

module Turnip
  module Define
    alias_method :original_step, :step

    def step(*args, **kwargs, &original_block)
      return original_step(*args, **kwargs, &original_block) unless original_block

      block_with_delay = proc do |*args, **kwargs|
        instance_exec(*args, **kwargs, &original_block)
          .tap { sleep ENV["TURNIP_DELAY"].to_i if ENV["TURNIP_DELAY"].present? }
      end

      original_step(*args, **kwargs, &block_with_delay)
    end
  end
end
