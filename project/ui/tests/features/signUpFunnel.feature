Feature: SignUp Funnel

    Background: User lands on start page and is ready to perform kredit comparison
        Given user is on the start page
        When user chose the Kredit product

    @Regression
    Scenario Outline: Verify that user navigated to signup page after seeing all banking comparisons
        When user entered the loan amount "<Nettokreditbetrag>"
        When user entered the loan duration <Laufzeit> years
        When user compared the results by clicking Jetzt vergleichen
        When user sees all banking comparisons
        Then user navigated to the Url starts with "https://www.verivox.de/ratenkredit/vergleich/" and end with "/signup10"

        Examples:
            | Laufzeit | Nettokreditbetrag |
            | 8        | 25000             |
@debug
    Scenario Outline: Verify that user navigated to signup page after in seven minute angebot
        When user entered the loan amount "<Nettokreditbetrag>"
        When user entered the loan duration <Laufzeit> years
        When user compared the results by clicking Jetzt vergleichen
        When user selected first seven minute angebot
        Then user navigated to the Url starts with "https://www.verivox.de/ratenkredit/vergleich/" and end with "/signup10"

        Examples:
            | Laufzeit | Nettokreditbetrag |
            | 8        | 25000             |

    Scenario Outline: Verify that user can see Nettokreditbetrag and Laufzeit on signup page
        When user entered the loan amount "<Nettokreditbetrag>"
        When user entered the loan duration <Laufzeit> years
        When user compared the results by clicking Jetzt vergleichen
        When user sees all banking comparisons
        Then user sees Nettokreditbetrag as "<Nettokreditbetrag>"
        And user sees Laufzeit as <Laufzeit>

        Examples:
            | Laufzeit | Nettokreditbetrag |
            | 8        | 25000             |
