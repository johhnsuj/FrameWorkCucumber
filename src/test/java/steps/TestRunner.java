package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/features", 
glue={"steps"},
//tags= {"@wip"},
plugin= {"html:reports"})
public class TestRunner extends AbstractTestNGCucumberTests{
	
}



