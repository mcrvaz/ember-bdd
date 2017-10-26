Feature: create workshop

  Scenario: filling the form

    Given I visit the "/workshop/create" page
    When I fill the "CNPJ" field with "44.776.164/0001-80"
    Then I should see a message saying "Dados coletados da Receita Federal"
    Then I should see the "Razao Social" field filled
    And I should see the "Nome Fantasia" field filled
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

  Scenario: invalid cnpj
    Given I visit the "/workshop/create" page
    When I fill the "CNPJ" field with "[CNPJ]"
    Then I should not see a message saying "Dados coletados da Receita Federal"
    Then I should see a "CNPJ" validation error
    Then I should see the "Razao Social" field empty
    And I should see the "Nome Fantasia" field empty
    And I should see the "Endereco" field empty
    And I should see the "Telefone" field empty
    And I should see the "Email" field empty

    Where:
    ------------------------------------------------
    | CNPJ               |
    | 44.776.164/0001-8  |
    | 4477616400018      |
    ------------------------------------------------

  Scenario: go back to the listing page

    Given I visit the "/workshop/create" page
    When I click on the "Back" button
    Then I visit the "workshop" page
