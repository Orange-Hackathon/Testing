package mobiletests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.annotations.Test;


public class loginPage extends BaseTest{

    // get xpaths for all taps and containers
    @FindBy (xpath = "")
    WebElement LoginPageTitleContainer; // Login

    @FindBy (xpath = "")
    WebElement PhoneNumContainer;

    @FindBy (xpath = "")
    WebElement PhoneNumErrorContainer;

    @FindBy (xpath = "")
    WebElement PINContainer;

    @FindBy (xpath = "")
    WebElement PINErrorContainer;

    @FindBy (xpath = "")
    WebElement LoginButton;

    @FindBy (xpath = "")
    WebElement SignUpButtonFromLoginPage;

    @FindBy (xpath = "")
    WebElement SecondTitleContainer; // enter your phone number, please

    @FindBy (xpath = "")
    WebElement ForgetPinButton;

    @FindBy (xpath = "")
    WebElement ForgetPinPageTitle;

    @FindBy (xpath = "")
    WebElement EmailContainer;

    @FindBy (xpath = "")
    WebElement EmailErrorContainer;

    @FindBy (xpath = "")
    WebElement SendInstructionsButton;

    @FindBy (xpath = "")
    WebElement CreateNewPinPageTitle;

    @FindBy (xpath = "")
    WebElement NewPinContainer;

    @FindBy (xpath = "")
    WebElement ConfirmPinContainer;

    @FindBy (xpath = "")
    WebElement ConfirmPinErrorContainer;

    @FindBy (xpath = "")
    WebElement ResetPinButton;

    @FindBy (xpath = "")
    WebElement Login;

    ////////////////////////////////////////////// test cases

    // Invalid test Cases
    @Test(description = "Enter invalid Phone Num(more than 11 digit)")
    void InvalidPhoneNum1() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01666561115");
        PINContainer.sendKeys("4568");
        LoginButton.click();
        // check for error in phone Num
        if (PhoneNumErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    @Test(description = "Enter invalid Phone Num(less than 11 digit)")
    void InvalidPhoneNum2() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01099564");
        PINContainer.sendKeys("4568");
        LoginButton.click();
        // check for error in phone Num
        if (PhoneNumErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter invalid Phone Num(first digit not equal 0 )")
    void InvalidPhoneNum3() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("109956453");
        PINContainer.sendKeys("4568");
        LoginButton.click();
        // check for error in phone Num
        if (PhoneNumErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter invalid Phone Num(second digit not equal 1 )")
    void InvalidPhoneNum4() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("0509956453");
        PINContainer.sendKeys("4568");
        LoginButton.click();
        // check for error in phone Num
        if (PhoneNumErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter invalid Phone Num(first two digits together not equal 01 digit)")
    void InvalidPhoneNum5() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("5509956453");
        PINContainer.sendKeys("4568");
        LoginButton.click();
        // check for error in phone Num
        if (PhoneNumErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter invalid Phone Num(third digit equal 4 or 6 or 7 or 8 or 9 )")
    void InvalidPhoneNum6() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01799564583");
        PINContainer.sendKeys("4568");
        LoginButton.click();
        // check for error in phone Num
        if (PhoneNumErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    @Test(description = "Enter invalid Phone Num(contain . or - )")
    void InvalidPhoneNum7() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("0109956.6-1");
        PINContainer.sendKeys("4568");
        LoginButton.click();
        // check for error in phone Num
        if (PhoneNumErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }





    @Test(description = "Enter invalid Pin Num(less than 4 digit, only 1 digit )")
    void InvalidPin1() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("8");
        LoginButton.click();
        // check for error in Pin Num
        if (PINErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter invalid Pin Num(less than 4 digit, only 2 digit )")
    void InvalidPin2() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("58");
        LoginButton.click();
        // check for error in Pin Num
        if (PINErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter invalid Pin Num(less than 4 digit, only 3 digit )")
    void InvalidPin3() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("588");
        LoginButton.click();
        // check for error in Pin Num
        if (PINErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter invalid Pin Num(More than 4 digit)")
    void InvalidPin4() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("656988");
        LoginButton.click();
        // check for error in Pin Num
        if (PINErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter invalid Pin Num(contain . or , or -)")
    void InvalidPin5() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("5.9-6");
        LoginButton.click();
        // check for error in pin num
        if (PINErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter valid phoneNum  & Pin Num but that data doesn't match any account in the database")
    void InvalidLogin() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("5596");
        LoginButton.click();
        // check that we are still in the same page
        if (SecondTitleContainer.getText().equals("Login") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "Enter valid phoneNum  & Pin Num ")
    void validLogin() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01099253789");
        PINContainer.sendKeys("5596");
        LoginButton.click();
        // check that we are still in the same page
        if (SecondTitleContainer.getText().equals("Login") ) {
            Assert.fail();
        }
        else {
            Assert.assertTrue(true);
        }
    }

    @Test(description = "GotoSignUpPageFromLogin")
    void GotoSignUpPageFromLogin() throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        // go sign Up page
        SignUpButtonFromLoginPage.click();
        Thread.sleep(500);

        // check for title of that page
        if (SecondTitleContainer.getText().equals("enter your phone number, please") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    @Test(description = "ResetMyPinButEnterInvalidEmail")
    void ResetMyPinButEnterInvalidEmail () throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        PhoneNumContainer.sendKeys("01099253789");
        // go forget Pin page
        ForgetPinButton.click();
        Thread.sleep(500);
        // check for title of that page
        if (ForgetPinPageTitle.getText().equals("Forgot PIN?")) {
            Assert.assertTrue(true);
        } else {
            Assert.fail();
        }
        EmailContainer.sendKeys("mahmoud@.com");
        SendInstructionsButton.click();
        Thread.sleep(500);
        if (EmailErrorContainer.getText().equals("--") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }

    @Test(description = "ResetMyPinButEnterNotEqualsPins")
    void ResetMyPinButEnterNotEqualsPins () throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        PhoneNumContainer.sendKeys("01099253789");
        // go forget Pin page
        ForgetPinButton.click();
        Thread.sleep(500);
        // check for title of that page
        if (ForgetPinPageTitle.getText().equals("Forgot PIN?") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        EmailContainer.sendKeys("mahmoud@gmail.com");
        SendInstructionsButton.click();
        Thread.sleep(500);
        if (CreateNewPinPageTitle.getText().equals("Create a new PIN") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        NewPinContainer.sendKeys("4545");
        ConfirmPinContainer.sendKeys("5455");
        ResetPinButton.click();
        Thread.sleep(500);
        if (ConfirmPinErrorContainer.getText().equals("") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "ResetMyPinThenLogin")
    void ResetMyPinThenLogin () throws InterruptedException {
        LoginPageTitleContainer.getText().equals("Login");
        PhoneNumContainer.sendKeys("01099253789");
        // go forget Pin page
        ForgetPinButton.click();
        Thread.sleep(500);
        // check for title of that page
        if (ForgetPinPageTitle.getText().equals("Forgot PIN?") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        EmailContainer.sendKeys("mahmoud@gmail.com");
        SendInstructionsButton.click();
        Thread.sleep(500);
        if (CreateNewPinPageTitle.getText().equals("Create a new PIN") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        NewPinContainer.sendKeys("4545");
        ConfirmPinContainer.sendKeys("4545");
        ResetPinButton.click();
        Thread.sleep(500);
        Login.click();

    }


}
