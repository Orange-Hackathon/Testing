import profile from "../../support/pageObjects/profile";


module.exports.ContainersOfProfile=(type)=>{
    switch(type){
        case "FullNameContainer":
            profile.getFullNameContainer().should('be.visible')
            break;
    }
    switch(type){
        case "EditNameButton":
            profile.getEditNameButton().should('be.visible')
            break;
    }
    switch(type){
        case "EditNameWindow":
            profile.getEditNameWindow().should('be.visible')
            break;
    }
    switch(type){
        case "EditNameContainer":
            profile.getEditNameContainer().should('be.visible')
            break;
    }
    switch(type){
        case "DoneEditButton":
            profile.getDoneEditButton().should('be.visible')
            break;
    }
    switch(type){
        case "EmailContainer":
            profile.getEmailContainer().should('be.visible')
            break;
    }
    switch(type){
        case "PhoneNumContainer":
            profile.getPhoneNumContainer().should('be.visible')
            break;
    }
    switch(type){
        case "PINContainer":
            profile.getPINContainer().should('be.visible')
            break;
    }
    switch(type){
        case "getManageChildreenTap":
            profile.getManageChildreenButton().should('be.visible')
            break;
    }
}