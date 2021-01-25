Feature: Hello World

    My First Test
Scenario: Google Search
Given I launch the Google home page
When I search for 'India'
Then verify the wiki page appears on the search
