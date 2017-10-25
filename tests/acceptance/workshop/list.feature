Feature: workshop listing

  Scenario: all workshops appear on the listing page
    Given I visit the "workshop" page
    When I look into the "workshop" list
    Then I should find 10 workshops

  Scenario: clicking on new workshop takes user to the workshop creation page
    Given I visit the "workshop" page
    When I click on the "Novo" button
    Then I should be on "/workshop/create" page
