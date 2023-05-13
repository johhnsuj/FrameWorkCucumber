Feature: verify the functionality of Automate Leaftaps Application 
as a user i want to login and logout
so that i can see homepage and frome homepage i can logout

@functional
Scenario Outline: TC001_verify succesful Login and Logout 

	Given Launch chrome browser and load url 
	And enter username as <username>
	And enter password as <password>
	When click the login button 
	Then its navigated Homepage 
	And  click the logout button
	And close browser
	
	Examples: 
	|username|password|
  |DemoSalesManager|crmsfa|
  |DemoCRM|crmsfa|

@smoke 
Scenario: TC002_verify the unsuccessful login by invalid username as false 

  Given Launch chrome browser and load url
  And enter username as false
	And enter password as crmsfa
	When click the login button 
	Then verify the error massage 
	And close browser

@smoke	
	Scenario: TC003_verify the unsuccessful login by invalid password as invalid 

  Given Launch chrome browser and load url
  And enter username as DemoSalesManager
	And enter password as invalid
	When click the login button 
	Then verify the error massage 
	And close browser

@smoke
 Scenario Outline: verify the functionality of create leads
 
 Given Launch chrome browser and load url
  And enter username as DemoSalesManager
  And enter password as crmsfa
  And click the login button
  And click the CRM/SFA link
  When click create lead
  And enter comapany name as <company>
  And enter first name as <fname>
  And enter last name as <lname>
  And click create lead button
  Then capture first name
  And close browser
  
  Examples:
  |company|fname|lname|
  |abc|rajesh|kumar|
  |xyz|hema|malini|
  |abc|rahul|baiddha|

@wip 
Scenario Outline: verify the functionality of duplicate lead
Given Launch chrome browser and load url
  And enter username as <username>
	And enter password as <password>
	And click the login button 
	And its navigated Homepage
	And click the CRM/SFA link  
	And click on leads link 
	When click on find leads link
	And click on email
	And enter email as abc@gmail.com
	And click on find leads button
	Then click first name in the list
	And click duplicate
	And click create lead 
	And close browser
	
Examples:
	|username|password|
  |DemoSalesManager|crmsfa|