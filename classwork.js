let accounts = [];

function myBank(){
    let choice = prompt("Menu: MakeCodeLitBank\n [1.]Open Account\n [2.]Deposit\n [3.]Withdraw\n [4.]Veiw Balance\n [5.]View Transaction\n [6.]Switch active account\n [7.]Close accounts\n [8.]All accounts summary\n [9.]Export session summary\n [0.]Exit\n Enter choice");

    if(choice === "1"){
        return openAccount();
    } else if(choice === "2"){
        return deposit();
    } else if(choice === "3"){
        return withdraw();
    } else if(choice === "4"){
        return viewBalance();
    } else if(choice === "5"){
        return viewTransacton();
    } else if(choice === "6"){
        return switchActiveAccount();
    } else if(choice === "7"){
       return closeAccount();
    } else if(choice === "8"){
        return allAccountSummary();
    } else if(choice === "9"){
        return exportSessionSummary();
    } else if(choice === "0"){
        return exit();
    } else {
        alert("Invalid Input.");
        myBank();
    }
} 

function openAccount(){
    let name = prompt("Enter account name.");
    if(!name) {
        alert("Account name cannot be empty.");
        return myBank();
    }
}

function deposit(){
    if(!activeAccount) {
        alert("Not an active account.");
        return myBank();
    }
}

function withdraw(){
    if(!activeAccount) {
        alert("Please open an account with us.");
        return myBank();
    }
    
    if(amount > activeAccount.balance) {
        alert("Insufficiient funds.");
        return myBank();
    }
}

function viewBalance(){
    if(!activeAccount) {
        alert("no active accont selected.");
        return myBank();
    }
}

function viewTransacton(){
    if(!activeAccount) {
        alert("No active account selected.");
        return myBank();
    }

    if(actveAccount.transaction.length === 0){
        alert("No transactions yet.");
        return myBank();
    }
}

function switchActiveAccount(){
    if(accounts.length === 0) {
        alert("Account does not exist.")
        return myBank();
    }
}

function closeAccount(){
    if(!activeAccount) {
        alert("No active account selected.");
        return myBank();
    }
}

function allAccountSummary(){
    if (accounts.length === 0){
        alert("No accounts avaliable.");
        return myBank();
    }
}

function exportSessionSummary(){
    if(accounts.length === 0){
        alert("No data to export.");
        return myBank();
    }
}

function exit(){
    alert("Thank you for using MakeCodeLitBankng. Goodbye!");
}