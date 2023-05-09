import loginPage from "../../support/pageObjects/login";

module.exports.ContainersOfLoginPage=(type)=>{
    switch(type){
        case "ContinerofTitle":
            loginPage.getTitleField().should('be.visible')
            break;
        case "ContinerofPhoneNum":
            loginPage.getPhonenumberField().should('be.visible')
            break;
        case "ContinerofErrorinPhoneNum":
            loginPage.getPhonenumbererrorField().should('be.visible')
            break;
        case "ContinerofPinNum":
            loginPage.getPinNumField().should('be.visible')
            break;
        case "ContinerofErrorinPinNum":
            loginPage.getPinNumerrorField().should('be.visible')
            break;
        case "LoginButton":
            loginPage.getLoginButton().should('be.visible')
            break;
        case "ForgetPinButton":
            loginPage.getForgetPINButton().should('be.visible')
            break;
        case "ContinerofEmail":
            loginPage.getEmailField().should('be.visible')
            break;
        case "ContinerofErrorEmail":
            loginPage.getErrorEmailField().should('be.visible')
            break;
        case "SendInstructionButton":
            loginPage.getSendInstructionButton().should('be.visible')
            break;
        case "ContinerofNewPin":
            loginPage.getNewPINContainer().should('be.visible')
            break;
        case "ContinerofConfirmPin":
            loginPage.getConfirmPINContainer().should('be.visible')
            break;
        case "ContinerofConfirmPinError":
            loginPage.getConfirmPINErrorContainer().should('be.visible')
            break;
        case "ResetPINButton":
            loginPage.getResetPINButton().should('be.visible')
            break;
        case "Login":
            loginPage.getLogin().should('be.visible')
            break;
        
    }
}