package intregratedTestNG;

import java.io.IOException;

import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;

public class SpecificWrapper {
	public ChromeDriver driver;
	@Parameters({"setproperty","path","url","uname","pwd"})
	@BeforeMethod
	public void login(String setproperty, String path, String url, String uname, String pwd) {
		System.setProperty(setproperty, path);
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(url);
		driver.findElementById("username").sendKeys(uname);
		driver.findElementById("password").sendKeys(pwd);
		driver.findElementByClassName("decorativeSubmit").click();
		driver.findElementByXPath("//a[contains(@style,'c')]").click();
		
	}
	@AfterMethod
	public void closebrowser() {
		driver.close();
	}
	
	@DataProvider
	public String[][] getdata() throws IOException {
		/*String[][] data = new String[2][3];
		data[0][0] = "abc";
		data[0][1] = "doulat";
		data[0][2] = "khan";
		
		data[1][0] = "xyz";
		data[1][1] = "alis";
		data [1][2] = "begum";
		return data;*/
		
		ReadExcel data = new ReadExcel();
		return data.readexcel();
	}

}
