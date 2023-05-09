import signupPage from "../../support/pageObjects/signUp";
import ContainersOfSignUpPage from "../../utils/signUp/signUpContainers"

//import {ContainersOfSignUpPage} from "../../Utils/SignUpPages/signUpContainers"

describe('Automated SignUp', () => {
    
    const validFirstname="Mahmoud"
    const validSecondname="Abdelhamid"
    const validPhoneNum="01099253789"
    const validEmail = "Ahmed55@gmail.com"
    const validPinNum = '1234'

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
    ContainersOfSignUpPage("LoginButton")
    })

    // test cases
    it('Enter valid Firstname , PhoneNum , Email ,Secondname , then continue second page & add valid PinNum ', ()=>{
        
        ContainersOfSignUpPage("ContinerofFirstname").clear().type(validFirstname)
        ContainersOfSignUpPage("ContinerofSecondname").clear().type(validSecondname)
        ContainersOfSignUpPage("ContinerofPhoneNum").clear().type(validPhoneNum)
        ContainersOfSignUpPage("ContinerofEmail").clear().type(validEmail)
        //continue
        ContainersOfSignUpPage("ContinueButton").realClick()
        // check that we are are in the second page by check that container of PinNum & SignUp Putton are Visible 
        ContainersOfSignUpPage("SignUpButton")
        ContainersOfSignUpPage("ContinerofPinNum")
        // enter valid PinNum
        ContainersOfSignUpPage("ContinerofPinNum").clear().type(validPinNum)
        // press on Confirm Button 
        ContainersOfSignUpPage("ConfirmButton").realClick()
        // press on SignUp Button 
        ContainersOfSignUpPage("SignUpButton").realClick()
        //  not completed , I have to check that the data entered
        // is already in the profile page
    })
})


