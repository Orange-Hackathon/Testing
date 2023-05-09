import ContainersOfLoginPage from "../../utils/login/loginContainers"
import ContainersOfDashBoard from "../../utils/homePage/dashBoardContainers"
import ContainersOfProfile from "../../utils/homePage/profileContainers"
import ContainersOfSendPage from "../../utils/homePage/sendContainers"

describe('Automated DashBoard', () => {
    
    
    const validPinNum = '1234'
    const validPhoneNum="01099253789"


    beforeEach('Login',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("---------") // login page
    // checking visibilty of all containers & puttons of that page
    ContainersOfLoginPage("ContinerofTitle").should("have.text","---------") // also check about the title that must be in it
    ContainersOfLoginPage("ContinerofPhoneNum").clear().type(validPhoneNum)
    ContainersOfLoginPage("ContinerofPinNum").clear().type(validPinNum)
    //continue to login 
    ContainersOfLoginPage("LoginButton").realClick()
    // check for url that had been changed to home Page of the user
    cy.url().should('eq', '------')
    // check visibilty of Balance Container & Send Tap
    ContainersOfDashBoard("BalanceContainer")
    ContainersOfDashBoard("SendTap")
    })

    // test cases
    it('Go to my profile Page and make sure that my phone num is the phone that i had login by ', ()=>{
        
        ContainersOfDashBoard("MyProfileTap").click()
        // check for url that had been changed to My Profile 
        cy.url().should('eq', '------')
        // check visibility of Name & Email 
        ContainersOfProfile("FullNameContainer")
        ContainersOfProfile("EmailContainer")
        // verificate from the phone Num
        ContainersOfProfile("PhoneNumContainer").should("have.text",validPhoneNum)
    })
    it('check visbility of Notifications ', ()=>{
        
        ContainersOfDashBoard("NotificationIcon").click()
        // check visbility of Notification Window
        ContainersOfDashBoard("NotificationWindow")
    })
    it('check visbility of Payments Page ', ()=>{
        
        ContainersOfDashBoard("PaymentsTap").click()
        // check for url 
        cy.url().should('eq', '------')
    })
    it('try to send Money to Specific user then check change of my Balance ', ()=>{
        ContainersOfDashBoard("SendTap").click()
        // search for contact
        ContainersOfSendPage("SearchContainer").clear.type("mahmoud")
        ContainersOfSendPage("SearchButton").click()
        ContainersOfSendPage("FirstContactField").click()
        // send 100 Pound
        ContainersOfSendPage("MoneyContainer").clear.type("100")
        ContainersOfSendPage("SendButton").click()
        ContainersOfSendPage("DoneButton").click()
        // return to dash board to make sure that the Balance had been decreased by 100
        ContainersOfDashBoard("DashBoardTap").click()
        ContainersOfDashBoard("BalanceContainer").should("have.text","----")
    })
    it('try to send Money to Specific user then cancle that sending ', ()=>{
        ContainersOfDashBoard("SendTap").click()
        // search for contact
        ContainersOfSendPage("SearchContainer").clear.type("mahmoud")
        ContainersOfSendPage("SearchButton").click()
        ContainersOfSendPage("FirstContactField").click()
        // send 100 Pound
        ContainersOfSendPage("MoneyContainer").clear.type("100")
        // but cancle it
        ContainersOfSendPage("CancleButton").click
        // check that we have returned to the search page by check visibilty
        ContainersOfSendPage("SearchContainer").clear.type("mahmoud")
        ContainersOfSendPage("SearchButton")
    })
    it('go to Manage Children Page from Dash Board But Do Nothing  ', ()=>{
        
        ContainersOfDashBoard("ManageChildrenTap").click()
        // check for url 
        cy.url().should('eq', '------')
        // return to Dash Board
        ContainersOfDashBoard("DashBoardTap").click()
        // check for url 
        cy.url().should('eq', '------')
    })
    it('LogOut  ', ()=>{
        
        ContainersOfDashBoard("LogOutTap").click()
        // check for url of login page
        cy.url().should('eq', '------')
        // check visiblity of containers in Login Page
        ContainersOfLoginPage("ContinerofTitle").should("have.text","---------") // also check about the title that must be in it
        ContainersOfLoginPage("ContinerofPhoneNum")
        ContainersOfLoginPage("ContinerofPinNum")
    })
})