package mobiletests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.annotations.Test;


public class sendPage extends BaseTest{
    // get xPaths for all taps and containers of that page
    @FindBy (xpath ="")
    WebElement SendTap;

    @FindBy (xpath = "")
    WebElement SearchContainer;

    @FindBy (xpath = "")
    WebElement SearchButton;

    @FindBy (xpath = "")
    WebElement FirstContact;

    @FindBy (xpath = "")
    WebElement SendContainer;

    @FindBy (xpath = "")
    WebElement SendEGButton1;

    @FindBy (xpath = "")
    WebElement DoneSendButton;
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
    @Test(description = "login with valid data then go to send money to specific contact & return to home page to make sure that my Balance had decreased by 100 Pound ")
    void SendMoneyToSpecificContact() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // send page
        SendTap.click();
        // search for that user
        SendContainer.sendKeys("Ahmed");
        SearchButton.click();
        if (FirstContact.getText().equals("Ahmed") ) {
            FirstContact.click();
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        SendContainer.sendKeys("100");
        SendEGButton1.click();
        if (DoneSendButton.isEnabled() ) {
            DoneSendButton.click();
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // return to home Page
        HomeIcon.click();
        // check for Balance Value
        if (BalanceContainer.getText().equals("2900") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

}
