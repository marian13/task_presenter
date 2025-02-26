# Task Presenter

An application to present tasks in different styles on the screen...

Check out the [spec/features](https://github.com/marian13/task_presenter/tree/main/spec/features) folder to get more details regarding supported features.

## Quick Links

| Description | Link |
| - | - |
| Local Application | [http://localhost:3000](http://localhost:3000) |
| Сhrome for e2e tests | [http://localhost:7900](http://localhost:7900) |

## Prerequisites

Before moving forward, make sure you have installed the specified list of tools.

- [Docker](https://www.docker.com/products/docker-desktop).

- [Task](https://taskfile.dev/installation/).

## Environment

Once all the prerequisites are set, copy and execute the task below to prepare Docker containers with MySQL, Redis, etc.

```bash
task docker:build
```

## Application

Now you can start the application locally by the following two commands.

```bash
task docker:rails:server
```

```bash
task docker:sidekiq
```

Then open a browser of your choice and visit [http://localhost:3000](http://localhost:3000) ([Chrome](https://www.google.com/chrome) is preferred since it was extensively tested).

## Demo

In order to get a quick overview of the implemented functionality, navigate to [http://localhost:7900](http://localhost:7900) and run e2e tests.

```bash
task docker:chrome
```

```bash
TURNIP_DELAY=3 task docker:turnip
```

Thanks 🙂.

**P.S.** Check `Taskfile.yml` for other available commands.
