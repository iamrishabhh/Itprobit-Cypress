Feature: End to End Eurostar Ticket Booking System

Scenario: Eurostar Home Page
Given Visit Eurostar Page
When Validate title of page
Then Click on TRAINS
Then Select FROM and TO options
Then Select two dates 
Then Select Passengers and click Search
Then Select Outbound Price
Then Select Return Price
Then Click continue without extra
Then Click check out as a guest 
Then Print or Screen Shot of the Check Out Screen
