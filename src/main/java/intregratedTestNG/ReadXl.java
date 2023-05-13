package intregratedTestNG;

import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReadXl {

	//public static String[][] main(String[] args) throws IOException {
	public String[][] readxl() throws IOException {
		XSSFWorkbook wb = new XSSFWorkbook("./data/readData.xlsx");
		XSSFSheet sheet = wb.getSheetAt(0);
		int rowCount = sheet.getLastRowNum();
		int columnCount = sheet.getRow(0).getLastCellNum();
		String[][] data = new String[rowCount][columnCount];
		for (int i = 1; i <= rowCount; i++) {
			XSSFRow row = sheet.getRow(i);
		for (int j = 0; j < columnCount; j++) {
			XSSFCell cell = row.getCell(j);
			String value = cell.getStringCellValue();
			System.out.println(value);
			data [i-1][j] = value;
		}	
		}
		return data;

	}

}
