Feature: create workshop

  Scenario: filling the form and creating a new workshop

    Given I visit the "/workshop/create" page
    When I fill the "Nome" field with "[Nome]"
    And I fill the "CNPJ" field with "[CNPJ]"
    When I click on the "Create" button
    Then I visit the "workshop" page
    Then I look into the "workshop" list
    And I see a workshop with "Nome" equal to "[Nome]"
    And I see the same workshop with "CNPJ" equal to "[CNPJ]"

    Where:

    ------------------------------------------------
    | Nome          | CNPJ      |
    | Oficina Teste | 147852963 |
    ------------------------------------------------
