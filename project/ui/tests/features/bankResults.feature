@Regression
Feature: Banking Result List

    Background: User lands on start page and is ready to perform kredit comparison
        Given user is on the start page
        When user chose the Kredit product

    Scenario: Verify that results have atleast 10 bank products
        When user entered the loan amount "25000"
        When user entered the loan duration 8 years
        When user compared the results by clicking Jetzt vergleichen
        Then user sees atleast 10 bank products

    Scenario: Verify that at least 1 product have Sofortauszahlung feature
        When user entered the loan amount "25000"
        When user entered the loan duration 8 years
        When user compared the results by clicking Jetzt vergleichen
        Then user sees atleast 1 bank product with Sofortauszahlung feature

    Scenario: Verify that mobile and desktop results are same
        When user entered the loan amount "25000"
        When user entered the loan duration 8 years
        When user compared the results by clicking Jetzt vergleichen
        Then user sees same results on mobile and desktop
