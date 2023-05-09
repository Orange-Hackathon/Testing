package mobiletests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.annotations.Test;


public class childPage extends BaseTest{
    // get xPaths for all taps and containers of that page
    @FindBy (xpath ="")
    WebElement AddChildButton;

    @FindBy (xpath = "")
    WebElement AddBalanceButton;

    @FindBy (xpath = "")
    WebElement AddBalanceContainer;

    @FindBy (xpath = "")
    WebElement DoneAddingBalance;

    @FindBy (xpath = "")
    WebElement SpendingContainer;

    @FindBy (xpath = "")
    WebElement AllowancePerWeekContainer;

    @FindBy (xpath = "")
    WebElement FoodCheckBox;

    @FindBy (xpath = "")
    WebElement GamingCheckBox;

    @FindBy (xpath = "")
    WebElement ClothsCheckBox;

    @FindBy (xpath = "")
    WebElement AddChildDone;

    // login
    @FindBy (xpath = "")
    WebElement PhoneNumContainer;

    @FindBy (xpath = "")
    WebElement PINContainer;

    @FindBy (xpath = "")
    WebElement LoginButton;

    @FindBy (xpath = "")
    WebElement ProfileIcon;

    public void login(){
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("5596");
        LoginButton.click();
    }

    ////////////////////////////////////////////// test cases

    // test Cases
    @Test(description = "login with valid data then go to add child , give him budget 300 Pounds ,allow him to spend only 50 Pound Per Week & spend them only in Food   ")
    void AddNewChild1() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to add child
        AddChildButton.click();
        // add Balance
        AddBalanceButton.click();
        AddBalanceContainer.sendKeys("300");
        DoneAddingBalance.click();
        // make sure that money go to Child's Balance
        if (AddBalanceContainer.getText().equals("300") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // allowances
        SpendingContainer.sendKeys("200");
        AllowancePerWeekContainer.sendKeys("75");
        FoodCheckBox.click();
        // add that child
        AddChildDone.click();
    }
    @Test(description = "login with valid data then go to add child , give him budget 400 Pounds ,allow him to spend only 100 Pound Per Week & spend them in Food & Gaming  ")
    void AddNewChild2() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to add child
        AddChildButton.click();
        // add Balance
        AddBalanceButton.click();
        AddBalanceContainer.sendKeys("400");
        DoneAddingBalance.click();
        // make sure that money go to Child's Balance
        if (AddBalanceContainer.getText().equals("400") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // allowances
        SpendingContainer.sendKeys("300");
        AllowancePerWeekContainer.sendKeys("100");
        FoodCheckBox.click();
        GamingCheckBox.click();
        // add that child
        AddChildDone.click();
    }
    @Test(description = "login with valid data then go to add child , give him budget 800 Pounds ,allow him to spend only 200 Pound Per Week & spend them in Clothing Only  ")
    void AddNewChild3() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to add child
        AddChildButton.click();
        // add Balance
        AddBalanceButton.click();
        AddBalanceContainer.sendKeys("800");
        DoneAddingBalance.click();
        // make sure that money go to Child's Balance
        if (AddBalanceContainer.getText().equals("800") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // allowances
        SpendingContainer.sendKeys("600");
        AllowancePerWeekContainer.sendKeys("150");
        ClothsCheckBox.click();
        // add that child
        AddChildDone.click();
    }
    @Test(description = "login with valid data then go to add child , give him budget 1000 Pounds ,allow him to spend only 300 Pound Per Week & spend them in All Categories  ")
    void AddNewChild4() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to add child
        AddChildButton.click();
        // add Balance
        AddBalanceButton.click();
        AddBalanceContainer.sendKeys("800");
        DoneAddingBalance.click();
        // make sure that money go to Child's Balance
        if (AddBalanceContainer.getText().equals("800") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // allowances
        SpendingContainer.sendKeys("600");
        AllowancePerWeekContainer.sendKeys("150");
        FoodCheckBox.click();
        GamingCheckBox.click();
        ClothsCheckBox.click();
        // add that child
        AddChildDone.click();
    }

}
