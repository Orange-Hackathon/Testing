import ContainersOfLoginPage from "../../utils/login/loginContainers"
import ContainersOfDashBoard from "../../utils/homePage/dashBoardContainers"
import ContainersOfProfile from "../../utils/homePage/profileContainers"
import ContainersOfManageChildreen from "../../utils/homePage/mangeChildreenContainers"

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
    cy.url().should('eq','------')
    // go to Profile Page
    ContainersOfDashBoard("MyProfileTap").click()
    })
    // test cases
    it('adding new child give him budget , limit for spending that budget & allow him to speed it in food only', ()=>{
        // check for url that had been changed to My Profile 
        cy.url().should('eq','------')
        // go to add child
        ContainersOfProfile("getManageChildreenTap").click()
        // check for url that had been changed to add childreen page 
        cy.url().should('eq','------')
        // add new child
        ContainersOfManageChildreen("AddChildIcon").click()
        // add Balance to that child
        ContainersOfManageChildreen("AddBalanceIcon").click()
        ContainersOfManageChildreen("AddBalanceContainer").clear().type("300")
        ContainersOfManageChildreen("DoneAdding").click()
        // limit speeding of that budget
        ContainersOfManageChildreen("SpendingLimitContainer").clear().type("250")
        // limit his speed money per week
        ContainersOfManageChildreen("AllowanceContainer").clear().type("50")
        // manage categories
        ContainersOfManageChildreen("FoodCheckBox").click()
        // done adding that child
        ContainersOfManageChildreen("DoneAddingChild").click()
    })
    it('adding new child give him budget , limit for spending that budget & allow him to speed it in Shopping only', ()=>{
        // check for url that had been changed to My Profile 
        cy.url().should('eq','------')
        // go to add child
        ContainersOfProfile("getManageChildreenTap").click()
        // check for url that had been changed to add childreen page 
        cy.url().should('eq','------')
        // add new child
        ContainersOfManageChildreen("AddChildIcon").click()
        // add Balance to that child
        ContainersOfManageChildreen("AddBalanceIcon").click()
        ContainersOfManageChildreen("AddBalanceContainer").clear().type("200")
        ContainersOfManageChildreen("DoneAdding").click()
        // limit speeding of that budget
        ContainersOfManageChildreen("SpendingLimitContainer").clear().type("150")
        // limit his speed money per week
        ContainersOfManageChildreen("AllowanceContainer").clear().type("50")
        // manage categories
        ContainersOfManageChildreen("ShoppingCheckBox").click()
        // done adding that child
        ContainersOfManageChildreen("DoneAddingChild").click()
    })
    it('adding new child give him budget , limit for spending that budget & allow him to speed it in gaming & Shopping only', ()=>{
        // check for url that had been changed to My Profile 
        cy.url().should('eq','------')
        // go to add child
        ContainersOfProfile("getManageChildreenTap").click()
        // check for url that had been changed to add childreen page 
        cy.url().should('eq','------')
        // add new child
        ContainersOfManageChildreen("AddChildIcon").click()
        // add Balance to that child
        ContainersOfManageChildreen("AddBalanceIcon").click()
        ContainersOfManageChildreen("AddBalanceContainer").clear().type("500")
        ContainersOfManageChildreen("DoneAdding").click()
        // limit speeding of that budget
        ContainersOfManageChildreen("SpendingLimitContainer").clear().type("350")
        // limit his speed money per week
        ContainersOfManageChildreen("AllowanceContainer").clear().type("50")
        // manage categories
        ContainersOfManageChildreen("GamingCheckBox").click()
        ContainersOfManageChildreen("ShoppingCheckBox").click()
        // done adding that child
        ContainersOfManageChildreen("DoneAddingChild").click()
    })
    it('adding new child give him budget , limit for spending that budget & allow him to speed it in all categries', ()=>{
        // check for url that had been changed to My Profile 
        cy.url().should('eq','------')
        // go to add child
        ContainersOfProfile("getManageChildreenTap").click()
        // check for url that had been changed to add childreen page 
        cy.url().should('eq','------')
        // add new child
        ContainersOfManageChildreen("AddChildIcon").click()
        // add Balance to that child
        ContainersOfManageChildreen("AddBalanceIcon").click()
        ContainersOfManageChildreen("AddBalanceContainer").clear().type("500")
        ContainersOfManageChildreen("DoneAdding").click()
        // limit speeding of that budget
        ContainersOfManageChildreen("SpendingLimitContainer").clear().type("350")
        // limit his speed money per week
        ContainersOfManageChildreen("AllowanceContainer").clear().type("50")
        // manage categories
        ContainersOfManageChildreen("FoodCheckBox").click()
        ContainersOfManageChildreen("GamingCheckBox").click()
        ContainersOfManageChildreen("ShoppingCheckBox").click()
        ContainersOfManageChildreen("ClothsCheckBox").click()
        // done adding that child
        ContainersOfManageChildreen("DoneAddingChild").click()
    })
})