
import ContainersOfLoginPage from "../../utils/login/loginContainers"

describe('Automated Login', () => {
    
    const validPinNum = '1234'
    const validPhoneNum="01099253789"
    const invalidPhoneNum="010nmm3789"
    const invalidPinNum = '12m4'

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
    
    it('Enter invalid PhoneNum(have chars) & valid PinNum ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(invalidPhoneNum)
        ContainersOfLoginPage("ContinerofEmail").clear().type(validPinNum)
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that container of error to PhoneNum is visible & has the expected text
        ContainersOfLoginPage("ContinerofErrorinPhoneNum").should("have.text","---------")
    })
    it('Enter invalid PhoneNum(not starting by 01) & valid PinNum ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type("22564615946")
        ContainersOfLoginPage("ContinerofEmail").clear().type(validPinNum)
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that container of error to PhoneNum is visible & has the expected text
        ContainersOfLoginPage("ContinerofErrorinPhoneNum").should("have.text","---------")
    })
    it('Enter invalid PhoneNum(not 11 digit) & valid PinNum ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type("0105565")
        ContainersOfLoginPage("ContinerofEmail").clear().type(validPinNum)
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that container of error to PhoneNum is visible & has the expected text
        ContainersOfLoginPage("ContinerofErrorinPhoneNum").should("have.text","---------")
    })
    it('Enter invalid PinNum(have chars) & valid PhoneNum  ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfLoginPage("ContinerofEmail").clear().type(invalidPinNum)
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that container of error to PinNum is visible & has the expected text
        ContainersOfLoginPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
    it('Enter invalid PinNum(less than 4 digits ---> only 3 digits) & valid PhoneNum  ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfLoginPage("ContinerofEmail").clear().type("266")
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that container of error to PinNum is visible & has the expected text
        ContainersOfLoginPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
    it('Enter invalid PinNum(less than 4 digits ---> only 2 digits) & valid PhoneNum  ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfLoginPage("ContinerofEmail").clear().type("26")
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that container of error to PinNum is visible & has the expected text
        ContainersOfLoginPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
    it('Enter invalid PinNum(less than 4 digits ---> only 1 digit) & valid PhoneNum  ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfLoginPage("ContinerofEmail").clear().type("6")
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that container of error to PinNum is visible & has the expected text
        ContainersOfLoginPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
    it('Enter invalid PhoneNum(have chars) & invalid PinNum(have chars) ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(invalidPhoneNum)
        ContainersOfLoginPage("ContinerofEmail").clear().type(invalidPinNum)
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that container of error to PhoneNum , PinNum is visible & has the expected text
        ContainersOfLoginPage("ContinerofErrorinPhoneNum").should("have.text","---------")
        ContainersOfLoginPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
    it('Enter valid PhoneNum & valid PinNum but that account isnot in the database  ,  then press Login ', ()=>{
        
        ContainersOfLoginPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfLoginPage("ContinerofEmail").clear().type(validPinNum)
        // press login
        ContainersOfLoginPage("LoginButton").realClick()
        // check that url doesn't changed & we are still in login page
        cy.url().should('eq', '------')
    })
    
})




