import signupPage from "../../support/pageObjects/signUp";
import ContainersOfSignUpPage from "../../utils/signUp/signUpContainers"
//import {ContainersOfSignUpPage} from "../../Utils/SignUpPages/signUpContainers"

describe('Automated SignUp', () => {
    
    const validFirstname="Mahmoud"
    const validSecondname="Abdelhamid"
    const validPhoneNum="01099253789"
    const validEmail = "Ahmed55@gmail.com"
    const invalidFirstname="Ma"
    const invalidSecondname="Ab"
    const invalidPhoneNum="010nmm3789"
    const invalidEmail = "Ahmed55gmail.com"
    const invalidPinNum = '1m34'

    beforeEach('Sign Up',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("---------")
    // checking visibilty of all containers & puttons of that page
    ContainersOfSignUpPage("ContinerofTitle").should("have.text","---------") // also check about the title that must be in it
    ContainersOfSignUpPage("ContinerofFirstname")
    ContainersOfSignUpPage("ContinerofSecondname")
    ContainersOfSignUpPage("ContinerofPhoneNum")
    ContainersOfSignUpPage("ContinerofEmail")
    ContainersOfSignUpPage("ContinueButton")
    })

    // test cases
    it('Enter invalid Firstname & valid Secondname , PhoneNum , Email then continue ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(invalidFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that container of error to first name is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinFirstname").should("have.text","---------")
    })
    it('Enter invalid Secondname & valid Firstname , PhoneNum , Email then continue ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(invalidSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that container of error to Second name is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinSecondname").should("have.text","---------")
    })
    it('Enter invalid Email & valid Firstname , Secondname , PhoneNum then continue ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(invalidEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that container of error to Email is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinEmail").should("have.text","---------")
    })
    it('Enter invalid PhoneNum(have chars) & valid Firstname , Secondname , Email then continue ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(invalidPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that container of error to PhoneNum is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinPhoneNum").should("have.text","---------")
    })
    it('Enter invalid PhoneNum(not starting by 01) & valid Firstname , Secondname , Email then continue ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type("22564615946")
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that container of error to PhoneNum is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinPhoneNum").should("have.text","---------")
    })
    it('Enter invalid PhoneNum(not 11 digit) & valid Firstname , Secondname , Email then continue ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type("0105565")
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that container of error to PhoneNum is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinPhoneNum").should("have.text","---------")
    })
    it('Enter invalid Firstname & valid Secondname , PhoneNum , Email then continue ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(invalidFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(invalidSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(invalidPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(invalidEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that container of error to first name ,second name , PhoneNum Email & are visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinFirstname").should("have.text","---------")
        ContainersOfSignUpPage("ContinerofErrorinSecondname").should("have.text","---------")
        ContainersOfSignUpPage("ContinerofErrorinPhoneNum").should("have.text","---------")
        ContainersOfSignUpPage("ContinerofErrorinEmail").should("have.text","---------")
    })
    it('Enter valid Firstname ,Secondname  , PhoneNum , Email , then continue second page & add invalid PinNum (have Chars) ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that we are are in the second page by check that container of PinNum & SignUp Putton are Visible 
        ContainersOfSignUpPage("SignUpButton")
        ContainersOfSignUpPage("ContinerofPinNum")
        // enter invalid PinNum(have Chars)
        ContainersOfSignUpPage("ContinerofPinNum").clear().type(invalidPinNum)
        // press on Signup Page
        ContainersOfSignUpPage("SignUpButton").realClick()
        // check that container of error to PinNum is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
    it('Enter valid Firstname  ,Secondname , PhoneNum , Email , then continue second page & add invalid PinNum (less than 4 digits ---> only 3 digits)  ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that we are are in the second page by check that container of PinNum & SignUp Putton are Visible 
        ContainersOfSignUpPage("SignUpButton")
        ContainersOfSignUpPage("ContinerofPinNum")
        // enter invalid PinNum(less than 4 digits ---> only 3 digits)
        ContainersOfSignUpPage("ContinerofPinNum").clear().type("266")
        // press on Signup Page
        ContainersOfSignUpPage("SignUpButton").realClick()
        // check that container of error to PinNum is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
    it.skip('Enter valid Firstname ,Secondname , PhoneNum , Email  , then continue second page & add invalid PinNum (less than 4 digits ---> only 2 digits)  ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that we are are in the second page by check that container of PinNum & SignUp Putton are Visible 
        ContainersOfSignUpPage("SignUpButton")
        ContainersOfSignUpPage("ContinerofPinNum")
        // enter invalid PinNum(less than 4 digits ---> only 2 digits)
        ContainersOfSignUpPage("ContinerofPinNum").clear().type("26")
        // press on Confirm
        ContainersOfSignUpPage("ConfirmButton").realClick()
        // check that container of error to PinNum is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
    it.skip('Enter valid Firstname ,Secondname , PhoneNum , Email , then continue second page & add invalid PinNum (less than 4 digits ---> only 1 digit)  ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that we are are in the second page by check that container of PinNum & SignUp Putton are Visible 
        ContainersOfSignUpPage("SignUpButton")
        ContainersOfSignUpPage("ContinerofPinNum")
        // enter invalid PinNum(less than 4 digits ---> only 1 digits)
        ContainersOfSignUpPage("ContinerofPinNum").clear().type("26")
        // press on ConfirmButton
        ContainersOfSignUpPage("ConfirmButton").realClick()
        // check that container of error to PinNum is visible & has the expected text
        ContainersOfSignUpPage("ContinerofErrorinPinNum").should("have.text","---------")
    })
})





/*
it('Enter valid Username By using one from suggeestions (sugestion1) & valid Password', ()=>{

      SignUpPage.getContainerOfusername().should("be.visible")
      SignUpPage.getSuggestion1().should("be.visible")

      SignUpPage.getSuggestion1().then((x) => {
          var correct=x.text()
          SignUpPage.getContainerOfusername().clear().type(correct)
          SignUpPage.getContainerOfusername().should('have.value',correct) 
      })

      SignUpPage.getContainerOfPassword().should("be.visible")
      SignUpPage.getContainerOfPassword().clear().type(Password)
      SignUpPage.getContainerOfPassword().should('have.value',Password) 
      SignUpPage.getSignUpButtontocontanue().realClick()   
  })

  it('Enter valid Username By using one from suggeestions but changes the sugesstion atfirst then select (sugestion3) & valid Password', ()=>{
    
    SignUpPage.getchangeSuggestionButton().click()
    SignUpPage.getContainerOfusername().should("be.visible")
    SignUpPage.getSuggestion3().should("be.visible")

    SignUpPage.getSuggestion3().then((x) => {
        var correct=x.text()
        SignUpPage.getContainerOfusername().clear().type(correct)
        SignUpPage.getContainerOfusername().should('have.value',correct) 
    })

    SignUpPage.getContainerOfPassword().should("be.visible")
    SignUpPage.getContainerOfPassword().clear().type(Password)
    SignUpPage.getContainerOfPassword().should('have.value',Password) 
    SignUpPage.getSignUpButtontocontanue().realClick()   
  })

  it('Enter valid password & username then back to change the Email the continue and change the username and select suggestion 5 & change the password ', ()=>{
    
    SignUpPage.getContainerOfusername().should("be.visible").clear().type(Username)
    SignUpPage.getContainerOfPassword().should("be.visible").clear().type(Password)
    SignUpPage.getContainerOfusername().should('have.value',Username)
    SignUpPage.getContainerOfPassword().should('have.value',Password)

    // return to change the email
    SignUpPage.getBackButton().click(({force: true}))
    SignUpPage.getContinerofEmail().should('be.visible')
    SignUpPage.getContinerofEmail().should('have.value', email )

    SignUpPage.getContinerofEmail().clear().type(email2,{force: true})
    SignUpPage.getContinerofEmail().should('have.value', email2 )
    SignUpPage.getContiueButton().contains('Continue').click({force: true})


    // select suggestion and dont changing the password then Sign Up
    SignUpPage.getContainerOfusername().should('have.value',Username)
    SignUpPage.getContainerOfPassword().should('have.value',Password)

    SignUpPage.getSuggestion5().should("be.visible")
    SignUpPage.getSuggestion5().then((x) => {
    var correct=x.text()
    SignUpPage.getContainerOfusername().clear().type(correct)
    SignUpPage.getContainerOfusername().should('have.value',correct) 
})
  // click SignUP
    SignUpPage.getSignUpButtontocontanue().realClick()
})


*/

