import signupPage from "../../support/pageObjects/signUp";
//const HomePage = new HomePage();

module.exports.ContainersOfSignUpPage=(type)=>{
    switch(type){
        case "ContinerofTitle":
            signupPage.getPagetitleField.should('be.visible')
            break;
        case "ContinerofFirstname":
            signupPage.getFirstnameField().should('be.visible')
            break;
        case "ContinerofErrorinFirstname":
            signupPage.getFirstnameerrorField().should('be.visible')
            break;
        case "ContinerofSecondname":
            signupPage.getSecondnameField().should('be.visible')
            break;
        case "ContinerofErrorinSecondname":
            signupPage.getSecondnameerrorField().should('be.visible')
            break;
        case "ContinerofPhoneNum":
            signupPage.getPhonenumberField().should('be.visible')
            break;
        case "ContinerofErrorinPhoneNum":
            signupPage.getPhonenumbererrorField().should('be.visible')
            break;
        case "ContinerofEmail":
            signupPage.getEmailField().should('be.visible')
            break;
        case "ContinerofErrorinEmail":
            signupPage.getEmailerrorField().should('be.visible')
            break;
        case "ContinueButton":
            signupPage.getContinueButton().should('be.visible')
            break;
        case "ContinerofPinNum":
            signupPage.getPinNumField().should('be.visible')
            break;
        case "ContinerofErrorinPinNum":
            signupPage.getPinNumerrorField().should('be.visible')
            break;
        case "SignUpButton":
            signupPage.getSignupButton().should('be.visible')
            break;
        case "ConfirmButton":
            signupPage.getConfirmButton().should('be.visible')
            break;
        case "LoginButton":
            signupPage.getLoginButtonFromSignUpPage().should('be.visible')
            break;
    }
}