Feature: create workshop

  Scenario: filling the form

    Given I visit the "/workshop/create" page
    When I fill the "CNPJ" field with "[CNPJ]"
    Then I should see the "Razao Social" field filled
    Then I should see the "Nome Fantasia" field filled
    And I should see the "Endereco" field filled
    And I should see the "Telefone" field filled
    And I should see the "Email" field filled
    Then I should not be able to edit the "CNPJ" field
    And I should not be able to edit the "Razao Social" field
    # When I click on the "Create" button
    # Then I visit the "workshop" page
    # Then I look into the "workshop" list
    # And I see a workshop with "Nome" equal to "[Nome]"
    # And I see the same workshop with "CNPJ" equal to "[CNPJ]"

    Where:

    ------------------------------------------------
    | Nome          | CNPJ      |
    | Oficina Teste | 147852963 |
    ------------------------------------------------

  Scenario: go back to the listing page

    Given I visit the "/workshop/create" page
    When I click on the "Back" button
    Then I visit the "workshop" page
