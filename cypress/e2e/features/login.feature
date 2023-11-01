Feature: Login Feature
    
    Scenario: Success Login
    Given A user opens the login page
    When A user enters the username "<username>"
    And A user enters the password "<password>"
    And A user clicks on the login button
    Then A user will be logged in