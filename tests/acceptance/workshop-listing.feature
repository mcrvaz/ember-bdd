Feature: workshop listing

  Scenario: all workshops appear on the listing page
    Given I visit the workshop listing page
    When I look in the workshop list
    Then I should find 10 workshops
