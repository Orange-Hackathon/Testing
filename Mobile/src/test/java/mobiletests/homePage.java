package mobiletests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.annotations.Test;


public class homePage extends BaseTest{
    // get xPaths for all taps and containers of that page
    @FindBy (xpath = "")
    WebElement NotificationIcon;

    @FindBy (xpath = "")
    WebElement NotificationWindow;

    @FindBy (xpath = "")
    WebElement SendTap;

    @FindBy (xpath = "")
    WebElement PaymentsTap;

    @FindBy (xpath = "")
    WebElement PaymentsWindow;

    @FindBy (xpath = "")
    WebElement BillsTap;

    @FindBy (xpath = "")
    WebElement BillsWindowTitle;

    @FindBy (xpath = "")
    WebElement AddChildTap;

    @FindBy (xpath = "")
    WebElement InsightsIcon;

    @FindBy (xpath = "")
    WebElement InsightsWindowTitle;

    @FindBy (xpath = "")
    WebElement CardIcon;

    @FindBy (xpath = "")
    WebElement CardWindowTitle;

    @FindBy (xpath = "")
    WebElement ProfileIcon1;

    @FindBy (xpath = "")
    WebElement AddBalanceButton;

    @FindBy (xpath = "")
    WebElement AddBalanceContainer;

    @FindBy (xpath = "")
    WebElement DoneAddBalanceButton;

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
    @Test(description = "=Add New Balance to my account from Home Page  ")
    void EditMyBalance() throws InterruptedException {
        // login with valid data at first
        login();
        Thread.sleep(500);
        // view Notifications
        AddBalanceButton.isEnabled();
        AddBalanceButton.click();
        if (AddBalanceContainer.isEnabled() ) {
            AddBalanceContainer.sendKeys("5000");
            if(DoneAddBalanceButton.isEnabled())
            {
                DoneAddBalanceButton.click();
            }
            else {
                Assert.fail();
            }
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "=View Notifications from Home Page  ")
    void ViewNotifications() throws InterruptedException {
        // login with valid data at first
        login();
        Thread.sleep(500);
        // view Notifications
        NotificationIcon.click();
        if (NotificationWindow.isEnabled() ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "=View Payments from Home Page  ")
    void ViewPayments() throws InterruptedException {
        // login with valid data at first
        login();
        Thread.sleep(500);
        // view Payments
        PaymentsTap.click();
        if (PaymentsWindow.isEnabled() ) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "=View Bills from Home Page  ")
    void ViewBills() throws InterruptedException {
        // login with valid data at first
        login();
        Thread.sleep(500);
        // view Bills
        BillsTap.click();
        if (BillsWindowTitle.getText().equals("Bills")) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "=View MyCard from Home Page  ")
    void ViewMyCard() throws InterruptedException {
        // login with valid data at first
        login();
        Thread.sleep(500);
        // view MyCard
        CardIcon.click();
        if (CardWindowTitle.getText().equals("Card")) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }

    }
    @Test(description = "=View Insights from Home Page  ")
    void ViewInsights() throws InterruptedException {
        // login with valid data at first
        login();
        Thread.sleep(500);
        // view Insights
        InsightsIcon.click();
        if (InsightsWindowTitle.getText().equals("Insights")) {
            Assert.assertTrue(true);
        }
        else {
            Assert.fail();
        }
    }
    @Test(description = "=View MyProfile from Home Page  ")
    void ViewMyProfile() throws InterruptedException {
        // login with valid data at first
        login();
        Thread.sleep(500);
        // view Insights
        ProfileIcon1.click();
    }
    @Test(description = "=View Add Child Page from Home Page  ")
    void ClickOnAddChildTap() throws InterruptedException {
        // login with valid data at first
        login();
        Thread.sleep(500);
        // view Insights
        AddChildTap.click();
    }
}
