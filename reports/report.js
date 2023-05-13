$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/doc.feature");
formatter.feature({
  "name": "verify the functionality of Automate Leaftaps Application",
  "description": "as a user i want to login and logout\nso that i can see homepage and frome homepage i can logout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC001_verify succesful Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functional"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa"
      ]
    },
    {
      "cells": [
        "DemoCRM",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC001_verify succesful Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functional"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.its_navigated_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC001_verify succesful Login and Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functional"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoCRM",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.its_navigated_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC002_verify the unsuccessful login by invalid username as false",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as false",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error massage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_error_massage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC003_verify the unsuccessful login by invalid password as invalid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as invalid",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error massage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_error_massage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify the functionality of create leads",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "click the CRM/SFA link",
  "keyword": "And "
});
formatter.step({
  "name": "click create lead",
  "keyword": "When "
});
formatter.step({
  "name": "enter comapany name as \u003ccompany\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter first name as \u003cfname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter last name as \u003clname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click create lead button",
  "keyword": "And "
});
formatter.step({
  "name": "capture first name",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "company",
        "fname",
        "lname"
      ]
    },
    {
      "cells": [
        "abc",
        "rajesh",
        "kumar"
      ]
    },
    {
      "cells": [
        "xyz",
        "hema",
        "malini"
      ]
    },
    {
      "cells": [
        "abc",
        "rahul",
        "baiddha"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify the functionality of create leads",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the CRM/SFA link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_CRM_SFA_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click create lead",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_create_lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter comapany name as abc",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_comapany_name_as_abc(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter first name as rajesh",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_first_name_as_hema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter last name as kumar",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_last_name_as_malini(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_create_lead_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "capture first name",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.capture_first_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify the functionality of create leads",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the CRM/SFA link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_CRM_SFA_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click create lead",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_create_lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter comapany name as xyz",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_comapany_name_as_abc(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter first name as hema",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_first_name_as_hema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter last name as malini",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_last_name_as_malini(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_create_lead_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "capture first name",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.capture_first_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify the functionality of create leads",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the CRM/SFA link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_CRM_SFA_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click create lead",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_create_lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter comapany name as abc",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_comapany_name_as_abc(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter first name as rahul",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_first_name_as_hema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter last name as baiddha",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_last_name_as_malini(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_create_lead_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "capture first name",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.capture_first_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify the functionality of duplicate lead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "And "
});
formatter.step({
  "name": "click the CRM/SFA link",
  "keyword": "And "
});
formatter.step({
  "name": "click on leads link",
  "keyword": "And "
});
formatter.step({
  "name": "click on find leads link",
  "keyword": "When "
});
formatter.step({
  "name": "click on email",
  "keyword": "And "
});
formatter.step({
  "name": "enter email as abc@gmail.com",
  "keyword": "And "
});
formatter.step({
  "name": "click on find leads button",
  "keyword": "And "
});
formatter.step({
  "name": "click first name in the list",
  "keyword": "Then "
});
formatter.step({
  "name": "click duplicate",
  "keyword": "And "
});
formatter.step({
  "name": "click create lead",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify the functionality of duplicate lead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and load url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.launch_chrome_browser_and_load_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as DemoSalesManager",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_username_as_DemoSalesManager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "its navigated Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.its_navigated_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the CRM/SFA link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_the_CRM_SFA_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on leads link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_on_leads_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on find leads link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_on_find_leads_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on email",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_on_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter email as abc@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.enter_email_as_abc_gmail_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on find leads button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_on_find_leads_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click first name in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.click_first_name_in_the_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click duplicate",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_duplicate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click create lead",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_create_lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "passed"
});
});