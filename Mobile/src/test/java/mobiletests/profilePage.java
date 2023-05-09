package mobiletests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.annotations.Test;


public class profilePage extends BaseTest{
    // get xPaths for all taps and containers of that page
    @FindBy (xpath ="")
    WebElement ProfileTitleContainer;

    @FindBy (xpath = "")
    WebElement FullNameContainer;

    @FindBy (xpath = "")
    WebElement EditNameButton;

    @FindBy (xpath = "")
    WebElement EditNameContainer;

    @FindBy (xpath = "")
    WebElement DoneEditButton; // enter your phone number, please

    @FindBy (xpath = "")
    WebElement PhoneNumberContainer;

    @FindBy (xpath = "")
    WebElement ChatSupportButton;
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
    @Test(description = "login with valid data then go to profile to make sure from my personal data")
    void VerifyMyLoginData() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to my profile
        ProfileIcon.click();
        // check for my phone num is that the one I had Login by
        if (PhoneNumberContainer.getText().equals("01099253789") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "login with valid data then go to profile to change my Full name")
    void ChangeMyFullName() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to my profile
        ProfileIcon.click();
        // check for my phone num is that the one I had Login by
        if (PhoneNumberContainer.getText().equals("01099253789") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        EditNameButton.click();
        EditNameContainer.sendKeys("Memo Samir");
        DoneEditButton.click();
        if (FullNameContainer.getText().equals("Memo Samir") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "login with valid data then go to profile then view chat Support Page")
    void ViewChatSupportPage() throws InterruptedException {
        // login
        login();
        Thread.sleep(500);
        // go to my profile
        ProfileIcon.click();
        // go to chat support Page
        if (ChatSupportButton.isEnabled() ) {
            ChatSupportButton.click();
        }
        else {
            Assert.fail();
        }
    }



}
