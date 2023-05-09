import send from "../../support/pageObjects/sendPage";


module.exports.ContainersOfSendPage=(type)=>{
    switch(type){
        case "SearchContainer":
            send.getSearchContainer().should('be.visible')
            break;
    }
    switch(type){
        case "SearchButton":
            send.getSearchButton().should('be.visible')
            break;
    }
    switch(type){
        case "FirstContactField":
            send.getFirstContact().should('be.visible')
            break;
    }
    switch(type){
        case "MoneyContainer":
            send.getMoneyContainer().should('be.visible')
            break;
    }
    switch(type){
        case "SendButton":
            send.getSendButton().should('be.visible')
            break;
    }
    switch(type){
        case "CancleButton":
            send.getCancleButton().should('be.visible')
            break;
    }
    switch(type){
        case "DoneButton":
            send.getDoneButton().should('be.visible')
            break;
    }
}