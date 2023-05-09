package mobiletests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.annotations.Test;


public class billsPage extends BaseTest{
    // get xPaths for all taps and containers of that page
    @FindBy (xpath ="")
    WebElement BillsIcon1;

    @FindBy (xpath = "")
    WebElement BillsWindow;

    @FindBy (xpath = "")
    WebElement ElectricityButton;

    @FindBy (xpath = "")
    WebElement WaterButton;

    @FindBy (xpath = "")
    WebElement GasButton;

    @FindBy (xpath = "")
    WebElement DonationButton;

    @FindBy (xpath = "")
    WebElement ChooseProviderButton;

    @FindBy (xpath = "")
    WebElement FirstProvider;

    @FindBy (xpath = "")
    WebElement UserIDContainer;

    @FindBy (xpath = "")
    WebElement ContinueButton;

    @FindBy (xpath = "")
    WebElement BillAmountContainer;

    @FindBy (xpath = "")
    WebElement PayButton;

    @FindBy (xpath = "")
    WebElement DonePayingButton;

    // login
    @FindBy (xpath = "")
    WebElement HomeIcon;

    @FindBy (xpath = "")
    WebElement BalanceContainer;

    @FindBy (xpath = "")
    WebElement PhoneNumContainer;

    @FindBy (xpath = "")
    WebElement PINContainer;

    @FindBy (xpath = "")
    WebElement LoginButton;

    public void login(){
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("5596");
        LoginButton.click();
    }

    ////////////////////////////////////////////// test cases

    // test Cases
    @Test(description = "login with valid data then go to bay Electricity Bill then return to Home Page to see the change of my Balance After Paying that Bill ")
    void PayElectricityBill() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to Bills
        BillsIcon1.click();
        // check for Bills Window
        if (BillsWindow.getText().equals("Bills") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // select Electricity
        ElectricityButton.click();
        // choose Electricity Provider to send money to
        ChooseProviderButton.click();
        FirstProvider.click();
        ContinueButton.click();
        BillAmountContainer.sendKeys("200");
        PayButton.click();
        if (DonePayingButton.isEnabled()) {
            DonePayingButton.click();
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // return to home Page
        HomeIcon.click();
        // check for Balance Value
        if (BalanceContainer.getText().equals("2800") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }
    @Test(description = "login with valid data then go to bay Water Bill then return to Home Page to see the change of my Balance After Paying that Bill ")
    void PayWaterBill() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to Bills
        BillsIcon1.click();
        // check for Bills Window
        if (BillsWindow.getText().equals("Bills") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // select Electricity
        WaterButton.click();
        // choose Water Provider to send money to
        ChooseProviderButton.click();
        FirstProvider.click();
        ContinueButton.click();
        BillAmountContainer.sendKeys("200");
        PayButton.click();
        if (DonePayingButton.isEnabled()) {
            DonePayingButton.click();
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // return to home Page
        HomeIcon.click();
        // check for Balance Value
        if (BalanceContainer.getText().equals("2600") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }
    @Test(description = "login with valid data then go to bay Gas Bill then return to Home Page to see the change of my Balance After Paying that Bill ")
    void PayGasBill() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to Bills
        BillsIcon1.click();
        // check for Bills Window
        if (BillsWindow.getText().equals("Bills") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // select Gas
        GasButton.click();
        // choose Gas Provider to send money to
        ChooseProviderButton.click();
        FirstProvider.click();
        ContinueButton.click();
        BillAmountContainer.sendKeys("200");
        PayButton.click();
        if (DonePayingButton.isEnabled()) {
            DonePayingButton.click();
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // return to home Page
        HomeIcon.click();
        // check for Balance Value
        if (BalanceContainer.getText().equals("2400") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }
    @Test(description = "login with valid data then go to Donate To Specific Foundation then return to Home Page to see the change of my Balance After Paying that Bill ")
    void DonateToSpecificFoundation() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to Bills
        BillsIcon1.click();
        // check for Bills Window
        if (BillsWindow.getText().equals("Bills") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // select Donation
        DonationButton.click();
        // choose Donation Provider to send money to
        ChooseProviderButton.click();
        FirstProvider.click();
        ContinueButton.click();
        BillAmountContainer.sendKeys("200");
        PayButton.click();
        if (DonePayingButton.isEnabled()) {
            DonePayingButton.click();
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // return to home Page
        HomeIcon.click();
        // check for Balance Value
        if (BalanceContainer.getText().equals("2200") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }
}
