function multiplyDimension(height, width){
    return height * width;
}

//arrow function
const multiply = (height, width) => {
    return height * width;
}

const timesNum = (height, width) => {
    console.log(height *width);
}

const square = num => num * num; //if its a single line of code you can omit the return and curly braces


// if it has only one parameter
const duties = duty =>{
    console.log("return to your " + duty + " post");
}
// if it has no parameter
const greet = () => {
    console.log("Welcome Ebube");
}

// SCOPES
let globalVar = "khalifa went global";
function printGlobalVar(){
    console.log(globalVar);
}
printGlobalVar();

//local scopes
function hail(){
    let message = "hail khalifa";
    console.log(message);
}
hail();
console.log(message); //this will throw an erro because message is a local variable

// block scope
if(true){
    let blockVar = "where is my brick?";
    console.log(blockVar);
}
console.log(blockVar); // error because blockVar is a block scope variable

let = 10

function printX(){
    let x = 20;
    console.log(x); //
}
printX(); //
console.log(x);