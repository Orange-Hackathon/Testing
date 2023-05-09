package mobiletests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.annotations.Test;


public class signupPage extends BaseTest{
    // get xPaths for all taps and containers of that page
    @FindBy (xpath = "")
    WebElement SecondTitleContainer; // enter your phone number, please

    @FindBy (xpath = "")
    WebElement PhoneNumContainer;

    @FindBy (xpath = "")
    WebElement PhoneNumErrorContainer;

    @FindBy (xpath = "")
    WebElement LoginButtonFromSignUpPage;

    @FindBy (xpath = "")
    WebElement LoginPageTitleContainer; // enter your phone number, please

    @FindBy (xpath = "")
    WebElement SignUpButton;

    @FindBy (xpath = "")
    WebElement PersonalInfoContainer;

    @FindBy (xpath = "")
    WebElement FirstNameContainer;

    @FindBy (xpath = "")
    WebElement FirstNameErrorContainer;

    @FindBy (xpath = "")
    WebElement LastNameContainer;

    @FindBy (xpath = "")
    WebElement LastNameErrorContainer;

    @FindBy (xpath = "")
    WebElement EmailContainer;

    @FindBy (xpath = "")
    WebElement EmailErrorContainer;

    @FindBy (xpath = "")
    WebElement NextButton;

    @FindBy (xpath = "")
    WebElement CreatePinTitle;

    @FindBy (xpath = "")
    WebElement Button_1;

    @FindBy (xpath = "")
    WebElement Button_2;

    @FindBy (xpath = "")
    WebElement Button_3;

    @FindBy (xpath = "")
    WebElement Button_4;

    @FindBy (xpath = "")
    WebElement DoneButton;

    ////////////////////////////////////////////// test cases

    // Invalid test Cases
    @Test(description = "Enter invalid Phone Num(contain . or -)")
    void InvalidPhoneNum1() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("0156-6.5665");
        SignUpButton.isEnabled();
        SignUpButton.click();

        // check for that error
        if (PhoneNumErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    @Test(description = "Enter invalid Phone Num(more than 10 digit)")
    void InvalidPhoneNum2() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("156697949656");
        SignUpButton.isEnabled();
        SignUpButton.click();

        // check for that error
        if (PhoneNumErrorContainer.getText().equals("--------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }
    @Test(description = "Enter invalid Phone Num(less than 10 digit)")
    void InvalidPhoneNum3() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("1566979");
        SignUpButton.isEnabled();
        SignUpButton.click();

        // check for that error
        if (PhoneNumErrorContainer.getText().equals("--------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }
    @Test(description = "Enter invalid Phone Num(first digit not equal 1 )")
    void InvalidPhoneNum4() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("909956453");
        SignUpButton.isEnabled();
        SignUpButton.click();

        // check for that error
        if (PhoneNumErrorContainer.getText().equals("--------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }


    @Test(description = "Enter invalid Phone Num(third digit equal 4 or 6 or 7 or 8 or 9 )")
    void InvalidPhoneNum5() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("01799564583");
        SignUpButton.isEnabled();
        SignUpButton.click();

        // check for that error
        if (PhoneNumErrorContainer.getText().equals("--------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // enter invalid First name

    }


    @Test(description = "GotoLoginPageFromSignUp & check the title of that page")
    void GotoLoginPageFromSignUp() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);

        LoginButtonFromSignUpPage.isEnabled();
        LoginButtonFromSignUpPage.click();

        // check that we are in Login page
        if (LoginPageTitleContainer.getText().equals("Login") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    @Test(description = "Enter valid PhoneNum , invalid FirstName, valid LastName , valid Email")
    void InvalidFirstName() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("1566567891");
        SignUpButton.isEnabled();
        SignUpButton.click();

        Thread.sleep(500);
        // check that we are in Personal info page
        if (LoginPageTitleContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // enter invalid First name
        FirstNameContainer.sendKeys("d2");
        LastNameContainer.sendKeys("mahmoud");
        EmailContainer.sendKeys("mahmoud@gmail.com");
        NextButton.click();

        // check for error in first name
        if (FirstNameErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    @Test(description = "Enter valid PhoneNum , valid FirstName, invalid LastName , valid Email")
    void InvalidLastName() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("1566567891");
        SignUpButton.isEnabled();
        SignUpButton.click();

        Thread.sleep(500);
        // check that we are in Personal info page
        if (LoginPageTitleContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // enter invalid Last name
        FirstNameContainer.sendKeys("mahmoud");
        LastNameContainer.sendKeys("d2");
        EmailContainer.sendKeys("mahmoud@gmail.com");
        NextButton.click();

        // check for error in last name
        if (LastNameErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    @Test(description = "Enter valid PhoneNum , valid FirstName, valid LastName , invalid Email")
    void InvalidEmail() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("1566567891");
        SignUpButton.isEnabled();
        SignUpButton.click();

        Thread.sleep(500);
        // check that we are in Personal info page
        if (LoginPageTitleContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // enter invalid Email
        FirstNameContainer.sendKeys("momo");
        LastNameContainer.sendKeys("mahmoud");
        EmailContainer.sendKeys("mahmoud@gmail");
        NextButton.click();

        // check for error in Email
        if (EmailErrorContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    @Test(description = "Enter valid PhoneNum , invalid FirstName, valid LastName , valid Email")
    void InvalidPersonalInfo() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("1566567891");
        SignUpButton.isEnabled();
        SignUpButton.click();

        Thread.sleep(500);
        // check that we are in Personal info page
        if (LoginPageTitleContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // enter invalid First name
        FirstNameContainer.sendKeys("d2");
        LastNameContainer.sendKeys("m5");
        EmailContainer.sendKeys("mahmoud@com");
        NextButton.click();

        // check for error in first name ,last name ,Email
        if (FirstNameErrorContainer.getText().equals("-------")  ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        if (LastNameErrorContainer.getText().equals("-------")  ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        if (EmailErrorContainer.getText().equals("-------")  ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }

    // valid testcase( valid Sign up )
    @Test(description = "Enter valid PhoneNum , valid FirstName, valid LastName , valid Email , then create Pin")
    void validSignUp() throws InterruptedException {
        SecondTitleContainer.getText().equals("-------");
        //Thread.sleep(500);
        PhoneNumContainer.sendKeys("1566567891");
        SignUpButton.isEnabled();
        SignUpButton.click();

        Thread.sleep(500);
        // check that we are in Personal info page
        if (LoginPageTitleContainer.getText().equals("-------") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // enter invalid Last name
        FirstNameContainer.sendKeys("mahmoud");
        LastNameContainer.sendKeys("momo");
        EmailContainer.sendKeys("mahmoud@gmail.com");
        NextButton.click();

        // check that we are in create Pin page
        if (CreatePinTitle.getText().equals("Create PIN") ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
        // enter Pin Num
        Button_1.click();
        Button_2.click();
        Button_3.click();
        Button_4.click();

        // click to done
        DoneButton.click();

        // we have to check for that personal info in the profile page
        // waiting for profile page to be done

    }

}
