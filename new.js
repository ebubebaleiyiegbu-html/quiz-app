// first i need an array for the names
// if statements for the conditions for if the name is not in the list 
// return statemeent if the person is not on the list
debugger
let cart = [];
function displayMenu() {
    let choice = prompt(`Main Menu:
    1. Add to cart
    2. Remove from cart
    3. View cart
    4. Exit
    Please enter the number of your choice:`);
    if (choice ==="1"){return addToCart();}
    else if (choice ==="2"){return removeFromCart();}
    else if (choice ==="3"){return viewCart();}
    else if (choice ==="4"){return exitProgram();}
    else {alert("Invalid choice. Please try again."); return displayMenu();}
}
function addToCart(){
    let item = prompt ( "add item")
    cart.push(item);
    displayMenu();
}
function removeFromCart(){
 if (cart.length === 0){
    alert("your cart is empty");
    displayMenu();
};
let item = prompt('Enter the removed items');
    let index = cart.indexOf(Number(item))
    cart.splice(index, 1);
    alert(`${item}has been removed from the cart`);
    displayMenu();
}
function viewCart(){
    if(cart.length === 0){
        alert("Your cart is empty.");
        displayMenu();
    }
}
function existProgram(){
    alert("Thank you for shopping! Bye Bye!")
}
displayMenu();










