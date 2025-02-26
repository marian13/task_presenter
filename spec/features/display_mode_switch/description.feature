@features/display_mode_switch
Feature: UI component to switch between two presentation styles

  As a user, I would like to have an UI component to switch between two presentation styles, the vertical list and the horizontal grid.

  Example: User switches between two presentation styles
    Given a user
    And seeded projects and tasks
    When the user navigates to the tasks page
    Then tasks are presented as a vertical list
    When the user clicks on the switch
    Then tasks are presented as a horizontal grid
    When the user clicks on the switch again
    Then tasks are presented as a vertical list

  Example: Switch state is persisted between page reloads
    Given a user
    And seeded projects and tasks
    When the user navigates to the tasks page
    Then tasks are presented as a vertical list
    When the user reloads the page
    Then tasks are presented as a vertical list
    When the user clicks on the switch
    Then tasks are presented as a horizontal grid
    When the user reloads the page
    Then tasks are presented as a horizontal grid

  Example: Switch state is not affected by projects filtering
    Given a user
    And seeded projects and tasks
    When the user navigates to the tasks page
    Then tasks are presented as a vertical list
    And all projects are selected
    When the user deselects the first project
    Then first project tasks are hidden
    And rest of the tasks are presented as a vertical list
    When the user clicks on the switch
    When the user selects the first project
    Then first project tasks are shown
    And all of the tasks are presented as a horizontal grid
