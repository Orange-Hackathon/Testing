import dashBoard from "../../support/pageObjects/dashBoard";

module.exports.ContainersOfDashBoard=(type)=>{
    switch(type){
        case "DashBoardTap":
            dashBoard.getDashBoardButton().should('be.visible')
            break;
    }
    switch(type){
        case "MyProfileTap":
            dashBoard.getMyProfileButton().should('be.visible')
            break;
    }
    switch(type){
        case "LogOutTap":
            dashBoard.getLogoutButton().should('be.visible')
            break;
    }
    switch(type){
        case "BalanceContainer":
            dashBoard.getBalanceField().should('be.visible')
            break;
    }
    switch(type){
        case "SendTap":
            dashBoard.getSendButton().should('be.visible')
            break;
    }
    switch(type){
        case "PaymentsTap":
            dashBoard.getPaymentsButton().should('be.visible')
            break;
    }
    switch(type){
        case "NotificationIcon":
            dashBoard.getNotificationIcon().should('be.visible')
            break;
    }
    switch(type){
        case "NotificationWindow":
            dashBoard.getNotificationWindow().should('be.visible')
            break;
    }
    switch(type){
        case "MyCardNumTap":
            dashBoard.getMyCardNumButton().should('be.visible')
            break;
    }
    switch(type){
        case "ManageChildrenTap":
            dashBoard.getManageChildrenButton().should('be.visible')
            break;
    }
}