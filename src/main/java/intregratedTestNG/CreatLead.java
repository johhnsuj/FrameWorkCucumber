package intregratedTestNG;

import org.testng.annotations.Test;

public class CreatLead extends Wrapper{


	@Test(dataProvider = "getdata")
	public void creatlead(String cname, String fname, String lname) {
		driver.findElementByXPath("//a[text()='Create Lead']").click();
		driver.findElementById("createLeadForm_companyName").sendKeys(cname);
		driver.findElementById("createLeadForm_firstName").sendKeys(fname);
		driver.findElementById("createLeadForm_lastName").sendKeys(lname);
		driver.findElementByXPath("//input[@name='submitButton']").click();


	}

}
