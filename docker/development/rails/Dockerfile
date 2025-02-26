FROM timbru31/ruby-node:3.4-slim-20

RUN apt-get update -qq \
  && apt-get install --no-install-recommends -y git \
  && apt-get install --no-install-recommends -y make \
  && apt-get install --no-install-recommends -y gcc \
  && apt-get install --no-install-recommends -y libz-dev \
  && apt-get install --no-install-recommends -y libyaml-dev \
  && apt-get install --no-install-recommends -y default-mysql-client \
  && apt-get install --no-install-recommends -y default-libmysqlclient-dev \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /rails

COPY ./Gemfile /rails/Gemfile

COPY ./Gemfile.lock /rails/Gemfile.lock

COPY ./package.json /rails/package.json

COPY ./yarn.lock /rails/yarn.lock

RUN bundle install

RUN yarn install
