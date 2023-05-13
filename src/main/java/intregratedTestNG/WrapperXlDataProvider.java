package intregratedTestNG;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class WrapperXlDataProvider {
	
	public ChromeDriver driver;
	@Parameters({"setproperty","path","url","uname","pwd"})
	@BeforeMethod
	@Test
	public void login(String setproperty, String path, String url, String uname, String pwd) {
		System.setProperty(setproperty, path);
	    driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(url);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		String actual = driver.getTitle();
		String expected = "Leaftaps - TestLeaf Automation Platform";
		Assert.assertEquals(actual, expected);
		driver.findElementByXPath("//input[@id='username']").sendKeys(uname);
		driver.findElementByXPath("//input[@id='password']").sendKeys(pwd);
		driver.findElementByXPath("//input[@class='decorativeSubmit']").click();
		String actual2 = driver.findElementByXPath("//*[@id=\"logo\"]").getText();
		String expected2 = "Testleaf";
		if(expected2.contains(actual2)) {
			System.out.println("logo is matched");
		}
		else {
			System.out.println("logo doesnt matched");
		}
		driver.findElementByPartialLinkText("CRM").click();
		

	}
	@AfterMethod
	public void closedriver() {
		driver.close();
	}
	@DataProvider
	public String[][] getdata() throws IOException {
		ReadXl emp = new ReadXl();
		return emp.readxl();
		
	}
	

}
