package intregratedTestNG;

import org.testng.annotations.Test;

public class CreateLead  extends SpecificWrapper{
	@Test(dataProvider = "getdata")
	public void createlead(String cname, String fname, String lname) {
		driver.findElementByXPath("//a[text()='Create Lead']").click();
		driver.findElementById("createLeadForm_companyName").sendKeys(cname);
		driver.findElementById("createLeadForm_firstName").sendKeys(fname);
		driver.findElementById("createLeadForm_lastName").sendKeys(lname);
		driver.findElementByXPath("//input[@name='submitButton']").click();
	}

}
