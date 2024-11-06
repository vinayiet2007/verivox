# Project Description
    - This is automation project for practice
# Project Requirement
    - NodeJs - v18.17.0
    - Playwright
    - TypeScript
    - Cucumber
    - VS Code
# Installation
    - After cloning project, install NodeJs and run below commands
        - npm install
        - npx playwright install
# Project Structure
    - All tests are stored under project directory
    - Project
        - api
            - tests
        - ui
            - common -> all common artifacts (for ex. Base classes, setup files etc.)
            - pages -> all page actions are stored
            - resources -> All page elements are stored
            - tests
                - features -> cucumber feature files are stored
                - steps -> step Defs are stored
    - report
# Test Structure
    - api
        - tests
            - cityVerification.spec.ts
    - ui
        - pages
            - commonPage.ts
            - comparisonResultsPage.ts
            - kreditModulePage.ts
            - signUpFunnelPage.ts
        - tests
            - features
                - bankResults.feature
                - signUpFunnel.feature
            - steps
                - bankResultsSteps.ts
                - commonSteps.ts
                - hooks.ts
                - signUpFunnelSteps.ts
                - hooks.ts
# Reporting
    - Cucumber reports are stored in report folder
    - Playwright reports are stored in playwright-report
# configuration
    - settings.json file contains cucumber related configuration
    - launch.json file contains debugs configurations
# Execution Process
    - For API tests run below command on root folder
        npx cucumber-js --tags @Regression"
    - For UI tests run below command on root folder
        npx playwright test
# Not Included:
- Test management tool integration
- External Reporting for ex. Grafana
- CI/CD
