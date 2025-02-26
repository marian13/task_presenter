@features/recurring_task
Feature: Recurring task

  As a user, I would like to have a recurring task to bring dynamic to this application.

  Example: Recurring task runs every 2 minutes for each project
    Given a user
    And seeded projects and tasks
    When the user navigates to the tasks page
    And the user waits for 2 minutes
    Then new task is added for each project to the top of the list
    And each new task has hardcoded name of "New Task" + current timestamp
    And the UI is automatically updated without page refresh
    When the user waits for 2 minutes again
    Then new task is added for each project to the top of the list
    And each new task has hardcoded name of "New Task" + current timestamp
    And the UI is automatically updated without page refresh
