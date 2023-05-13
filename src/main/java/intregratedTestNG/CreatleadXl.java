package intregratedTestNG;

import org.testng.annotations.Test;

public class CreatleadXl extends WrapperXlDataProvider {

	@Test(dataProvider = "getdata")
	public void creatlead(String cname, String fname, String lname) {
		driver.findElementByXPath("//a[text()='Create Lead']").click();
		driver.findElementById("createLeadForm_companyName").sendKeys(cname);
		driver.findElementById("createLeadForm_firstName").sendKeys(fname);
		driver.findElementById("createLeadForm_lastName").sendKeys(lname);
		driver.findElementByXPath("//input[@name='submitButton']").click();
		

	}
}
