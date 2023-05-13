package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefination {
	ChromeDriver driver;
	@Given("Launch chrome browser and load url")
	public void launch_chrome_browser_and_load_url() {
	    System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("http://leaftaps.com/opentaps/control/main");
	}

	@Given("enter username as (.*)")
	public void enter_username_as_DemoSalesManager(String username) {
	    driver.findElementById("username").sendKeys(username);
	}

	@Given("enter password as (.*)")
	public void enter_password_as_crmsfa(String password) {
		 driver.findElementById("password").sendKeys(password);
	}

	@When("click the login button")
	public void click_the_login_button() {
		driver.findElementByClassName("decorativeSubmit").click();
	}

	@Then("its navigated Homepage")
	public void its_navigated_Homepage() {
	   System.out.println(driver.getTitle());
	}

	@Then("click the logout button")
	public void click_the_logout_button() {
		driver.findElementByClassName("decorativeSubmit").click();

	}

	@Then("close browser")
	public void close_browser() {
	    driver.quit();
	}
	@Then("verify the error massage")
	public void verify_the_error_massage() {
	    String actualtxt = driver.findElementById("errorDiv").getText();
	    String expectedtxt = "The Following Errors Occurred:";
	    if(actualtxt.contains(expectedtxt)) {
	    	System.out.println("error massege displayed");
	    }
	    else {
	    	System.out.println("error massege is not displayed");
	    }
	}   
	@Given("click the CRM\\/SFA link")
	public void click_the_CRM_SFA_link() {
	    driver.findElementByLinkText("CRM/SFA").click();
	}

	@When("click create lead")
	public void click_create_lead() {
	    driver.findElementByXPath("//a[text()='Create Lead']").click();
	}

	@When("enter comapany name as (.*)")
	public void enter_comapany_name_as_abc(String cname) {
	    driver.findElementById("createLeadForm_companyName").sendKeys(cname);
	}

	@When("enter first name as (.*)")
	public void enter_first_name_as_hema(String fname) {
	    driver.findElementById("createLeadForm_firstName").sendKeys(fname);
	}

	@When("enter last name as (.*)")
	public void enter_last_name_as_malini(String lname) {
	    driver.findElementById("createLeadForm_lastName").sendKeys(lname);
	}

	@When("click create lead button")
	public void click_create_lead_button() {
		driver.findElementByXPath("//input[@value='Create Lead']").click();
	}

	@Then("capture first name")
	public void capture_first_name() {
	    String firstname = driver.findElementByXPath("//span[@id='viewLead_firstName_sp']").getText();
	    if(firstname.equals("hema")) {
	    	System.out.println("first name is hema");
	    }
	    else {
	    	System.out.println("first name is not hema");
	    }
	}
	@Given("click on leads link")
	public void click_on_leads_link() {
		driver.findElement(By.xpath("//a[text()='Leads']")).click();
	}

	@When("click on find leads link")
	public void click_on_find_leads_link() {
		driver.findElement(By.xpath("//a[text()='Find Leads']")).click();
	}

	@When("click on email")
	public void click_on_email() {
		driver.findElement(By.xpath("//span[text()='Email']")).click();
	}

	@When("enter email as abc@gmail.com")
	public void enter_email_as_abc_gmail_com() {
		driver.findElement(By.xpath("//input[@name='emailAddress']")).sendKeys("abc@gmail.com");
	}

	@When("click on find leads button")
	public void click_on_find_leads_button() {
		driver.findElementByXPath("//button[text()='Find Leads']").click();
	}

	@Then("click first name in the list")
	public void click_first_name_in_the_list() {
		driver.findElement(By.xpath("(//div[@class='x-grid3-cell-inner x-grid3-col-firstName']/a)[1]"));
	}

	@Then("click duplicate")
	public void click_duplicate() {
		try {
		driver.findElementByXPath("//a[text()='Duplicate Lead']").click();
		}
		catch(Exception e){
			System.err.println("the duplicate button is not clickable by any locater");
		}
	}

	
}
