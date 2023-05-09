import ContainersOfLoginPage from "../../utils/login/loginContainers"

describe('Automated Login', () => {
    
    
    const validPinNum = '1234'
    const validEmail="Mahmoud@gmail.com"
    const invalidEmail = "Ahmed55gmail.com"


    beforeEach('Reset Pin',()=>{
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
    it('enter my Email But put invalid Email  ', ()=>{
        ContainersOfLoginPage("ForgetPinButton").click()
        ContainersOfLoginPage("ContinerofEmail").clear().type(invalidEmail)
        ContainersOfLoginPage("SendInstructionButton").click()
        // check that there is error in email
        ContainersOfLoginPage("ContinerofErrorEmail").should("have.text","-------")
    })
    it('enter my Email But put two differant Pins  ', ()=>{
        ContainersOfLoginPage("ForgetPinButton").click()
        ContainersOfLoginPage("ContinerofEmail").clear().type(validEmail)
        ContainersOfLoginPage("SendInstructionButton").click()
        // enter new pin
        ContainersOfLoginPage("ContinerofNewPin").clear().type("8989")
        ContainersOfLoginPage("ContinerofConfirmPin").clear().type("8888")
        // reset
        ContainersOfLoginPage("ResetPINButton").click()
        // check that there is error
        ContainersOfLoginPage("getConfirmPINErrorContainer").should("have.text","-------")
    })
    it('enter my Email put pin then login  ', ()=>{
        ContainersOfLoginPage("ForgetPinButton").click()
        ContainersOfLoginPage("ContinerofEmail").clear().type(validEmail)
        ContainersOfLoginPage("SendInstructionButton").click()
        // enter new pin
        ContainersOfLoginPage("ContinerofNewPin").clear().type(validPinNum)
        ContainersOfLoginPage("ContinerofConfirmPin").clear().type(validPinNum)
        // reset
        ContainersOfLoginPage("ResetPINButton").click()
        // login 
        ContainersOfLoginPage("Login").click()
        // we have to check for that data in my profile
    })
})


