import ContainersOfLoginPage from "../../utils/login/loginContainers"
import ContainersOfDashBoard from "../../utils/homePage/dashBoardContainers"
import ContainersOfProfile from "../../utils/homePage/profileContainers"

describe('Automated Profile', () => {
    
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
    // go to Profile Page
    ContainersOfDashBoard("MyProfileTap").click()
    })
    // test cases
    it('Go to my profile Page and change my full name the logout , login again and make sure that the name had been changed  ', ()=>{
        
        // check for url that had been changed to My Profile 
        cy.url().should('eq', '------')
        // verificate from the phone Num
        ContainersOfProfile("PhoneNumContainer").should("have.text",validPhoneNum)
        // check visibility of Name
        ContainersOfProfile("FullNameContainer")
        // edit name
        ContainersOfProfile("EditNameButton").click()
        // check visibilty of edit name window
        ContainersOfProfile("EditNameWindow")
        // cahnge name
        ContainersOfProfile("EditNameContainer").clear().type("memo memo")
        ContainersOfProfile("DoneEditButton").click()
        // logOut
        ContainersOfDashBoard("LogOutTap").click()
        // login again
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfLoginPage("ContinerofPinNum").clear().type(validPinNum)
        // go to profile and confirm that Full name had been changed
        ContainersOfDashBoard("MyProfileTap").click()
        ContainersOfProfile("FullNameContainer").should("have.text","memo memo")
    })
})