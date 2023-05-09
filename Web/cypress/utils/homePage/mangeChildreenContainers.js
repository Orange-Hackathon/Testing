import manageChildreen from "../../support/pageObjects/manageChildreen";


module.exports.ContainersOfManageChildreen=(type)=>{
    switch(type){
        case "AddChildIcon":
            manageChildreen.getAddChildButton().should('be.visible')
            break;
    }
    switch(type){
        case "AddBalanceIcon":
            manageChildreen.getAddBalanceButton().should('be.visible')
            break;
    }
    switch(type){
        case "AddBalanceContainer":
            manageChildreen.getAddBalanceContainer().should('be.visible')
            break;
    }
    switch(type){
        case "DoneAdding":
            manageChildreen.getDoneAddingButton().should('be.visible')
            break;
    }
    switch(type){
        case "SpendingLimitContainer":
            manageChildreen.getSpendingLimitContainer().should('be.visible')
            break;
    }
    switch(type){
        case "AllowanceContainer":
            manageChildreen.getAllowanceContainer().should('be.visible')
            break;
    }
    switch(type){
        case "FoodCheckBox":
            manageChildreen.getFoodCheckBox().should('be.visible')
            break;
    }
    switch(type){
        case "GamingCheckBox":
            manageChildreen.getGamingCheckBox().should('be.visible')
            break;
    }
    switch(type){
        case "ShoppingCheckBox":
            manageChildreen.getShoppingCheckBox().should('be.visible')
            break;
    }
    switch(type){
        case "ClothsCheckBox":
            manageChildreen.getClothsCheckBox().should('be.visible')
            break;
    }
    switch(type){
        case "DoneAddingChild":
            manageChildreen.getAddChildDoneButton().should('be.visible')
            break;
    }
    
}