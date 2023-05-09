import ContainersOfLoginPage from "../../utils/login/loginContainers"
import ContainersOfDashBoard from "../../utils/homePage/dashBoardContainers"
import ContainersOfProfile from "../../utils/homePage/profileContainers"
const Data ='../fixtures/data.json';
describe('Automated Login', () => {
    
    
    const validPinNum = '1234'
    const validPhoneNum="01099253789"
    


    beforeEach('Login',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("---------")
    // checking visibilty of all containers & puttons of that page
    ContainersOfLoginPage("ContinerofTitle").should("have.text","---------") // also check about the title that must be in it
    ContainersOfLoginPage("ContinerofPhoneNum")
    ContainersOfLoginPage("ContinerofPinNum")
    ContainersOfLoginPage("LoginButton")
    })

    // test cases
    it('Enter valid Firstname , PhoneNum , Email ,Secondname , then continue second page & add valid PinNum ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfLoginPage("ContinerofPinNum").clear().type(validPinNum)
        //continue to login 
        ContainersOfLoginPage("LoginButton").realClick()
        //I have to check that the data entered
        ContainersOfDashBoard("MyProfileTap").click()
        // check for url that had been changed to My Profile 
        cy.url().should('eq', '------')
        // check visibility of Name & Email 
        ContainersOfProfile("FullNameContainer")
        ContainersOfProfile("EmailContainer")
        // verificate from the phone Num
        ContainersOfProfile("PhoneNumContainer").should("have.text",validPhoneNum)
    })
})


